import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AppHeader from "./Header/header";
import MicroFrontend from "./Container/Container";
// import About from './About';

console.log({ env: process?.env });
const { REACT_APP_HOSPITAL_HOST: hospitalHost,
   REACT_APP_PMS_HOST: pmsHost,
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
const PMS = ({ history }) => (
  <MicroFrontend history={history} host={pmsHost} name="PMSapp" />
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
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
