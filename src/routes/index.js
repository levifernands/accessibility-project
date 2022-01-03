import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import React from "react";
import Home from "../pages/Home";

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/:state/:city" element={<Home />} /> */}
        <Route path="/ce/fortaleza" element={<Home city={props.city} />} />
      </Switch>
    </Router>
  );
};

export default Routes;
