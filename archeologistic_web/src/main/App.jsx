import React from "react";
import { Router, browserHistory, Route } from 'react-router';
import Home from "../Pages/Home";
import SingIn from "../Pages/SingIn";
import SingUp from "../Pages/SingUp";
import CataloguePage from "../Pages/CataloguePage";
import LinesPage from "../Pages/LinesPage";
import HeritagePage from "../Pages/HeritagePage";



function App() {



  return (
    <>
      <Router history={browserHistory}>

        <Route path="/" component={Home} />
        <Route path="/loggin" component={SingIn} />
        <Route path="/loggup" component={SingUp} />
        <Route path="/catalogues" component={CataloguePage} />
        <Route path="/lines" component={LinesPage} />
        <Route path="/heritage" component={HeritagePage} />

      </Router>
    </>

  );
}

export default App;
