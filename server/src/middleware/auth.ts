import { Request, NextFunction, Response, Express } from 'express';
import * as jwt from 'jsonwebtoken';
import AuthenticationTokenMissingException from '../exceptions/AuthenticationTokenMissingException';
import WrongAuthenticationTokenException from '../exceptions/WrongAuthenticationTokenException';
import DataStoredInToken from '../interfaces/IDataStoredInToken';
import userModel from '../models/user';

async function authMiddleware(request: Request, response: Response, next: NextFunction): Promise<void> {
  const cookies = request.cookies;
  if (cookies && cookies.Authorization && process.env.JWT_SECRET) {
    try {
      const verificationResponse = jwt.verify(cookies.Authorization, process.env.JWT_SECRET) as DataStoredInToken;
      const id = verificationResponse._id;
      const user = await userModel.findById(id);
      if (user) {
        request.user = user;
        next();
      } else {
        next(new WrongAuthenticationTokenException());
      }
    } catch (error) {
      next(new WrongAuthenticationTokenException());
    }
  } else {
    next(new AuthenticationTokenMissingException());
  }
}

export default authMiddleware;
