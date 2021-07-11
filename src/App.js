import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AppHeader from "./Header/header";
import MicroFrontend from "./Container/Container";
// import About from './About';
import './App.css'

console.log({ env: process?.env });
const { REACT_APP_HOSPITAL_HOST: hospitalHost,
   REACT_APP_REDUX_HOST: reduxHost
   } = process.env || {};

let numRestaurants = 0;
fetch(`${process?.env?.REACT_APP_HOSPITAL_HOST}/hospital.json`)
  .then((res) => res.json())
  .then((hospital) => {
    console.log({ hospital });
  });

const Hospital = ({ history }) => (
  <MicroFrontend history={history} host={hospitalHost} name="Hospitalapp" />
);
const Combine = ({ history }) => (
  <div className="container">
    <div className="contain1">
    <MicroFrontend history={history} host={hospitalHost} name="Hospitalapp" />
  </div>
  <div className="contain2">
  <MicroFrontend history={history} host={reduxHost} name="Reduxapp" />
    </div>

  </div>
);
const redux = ({ history }) => (
  <MicroFrontend history={history} host={reduxHost} name="Reduxapp" />
);
const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Hospital} />
        <Route exact path="/redux" component={redux} />
        <Route exact path="/combine" component={Combine} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
