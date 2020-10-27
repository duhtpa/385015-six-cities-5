import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Main from "../main/main";
import Favorites from "../favorites/favorites";
import OfferPage from "../offer-page/offer-page";
import SignIn from "../sign-in/sign-in";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            // offers={offers}
          />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>

        <Route
          exact
          path="/offer/:id?"
          component={OfferPage}
        />
        <Route>
          <h2>Page 404</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
