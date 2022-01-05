import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { useState } from "react";
import { LocationContext } from "../contexts/LocationContext";
import Home from "../pages/Home";
import Header from "../components/Header/Header";
import Places from "../components/Places/Places";
import Curator from "../components/Curator/Curator";
import { FilterContext } from "../contexts/FilterContext";

const Routes = (props) => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [filteredPlace, setFilteredPlace] = useState("");
  return (
    <FilterContext.Provider value={{ filteredPlace, setFilteredPlace }}>
      <LocationContext.Provider value={{ city, setCity, state, setState }}>
        <Header />
        <Switch>
          <Route
            path="/:state/:city"
            element={
              <>
                <Home />
                <Places />
                <Curator />
              </>
            }
          ></Route>
        </Switch>
      </LocationContext.Provider>
    </FilterContext.Provider>
  );
};

export default Routes;
