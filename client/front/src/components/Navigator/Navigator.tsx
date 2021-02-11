import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Pet from '../Pet/Pet';
import AdoptForm from '../AdoptionRequest/CreateAdoptionRequest/CreateAdoptionRequest';
import { AllPetsIndex } from '../AllPetsIndex/AllPetsIndex';

const Navigator: React.FC = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path={`/pets/:petId`} exact component={Pet} />
        <Route path="/allPets" exact component={AllPetsIndex} />
      </Switch>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Navigator;
