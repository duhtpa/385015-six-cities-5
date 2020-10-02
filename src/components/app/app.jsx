import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import SignIn from "../sign-in/sign-in";

const App = (props) => {
  const {placesCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main placesCount={placesCount} />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/offer/:id">
          <Room />
        </Route>
        <Route>
          <h2>Page 404</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
