import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Pet } from "../models/pet";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PetService {
  private baseUrl = `${environment.apiUrl}/pets`;

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  getAll(params: any): Observable<any> {
    const res = this.http.get<Pet[]>(this.baseUrl, { params });
    return res;
  }

  get(id: string): Observable<any> {
    const res = this.http.get<Pet>(`${this.baseUrl}/${id}`);
    console.log(res);

    return res;
  }

  create(data: any): Observable<any> {
    console.log('data from creat');
    console.log(data);
    return this.http.post(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    console.log(data);
    console.log(id);
    
    const res = this.http.put(`${this.baseUrl}/${id}`, data);
    console.log(res);
    
    return res;
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
