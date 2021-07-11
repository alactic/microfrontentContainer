import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AppHeader from "./Header/header";
import MicroFrontend from "./Container/Container";
// import About from './About';

console.log({ env: process?.env });
const { REACT_APP_HOSPITAL_HOST: hospitalHost } = process.env || {};

let numRestaurants = 0;
fetch(`${process?.env?.REACT_APP_HOSPITAL_HOST}/hospital.json`)
  .then((res) => res.json())
  .then((hospital) => {
    console.log({ hospital });
  });

const Hospital = ({ history }) => (
  <MicroFrontend history={history} host={hospitalHost} name="Hospitalapp" />
);
const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Hospital} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
