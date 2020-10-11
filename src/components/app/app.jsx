import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Main from "../main/main";
import Favorites from "../favorites/favorites";
import OfferPage from "../offer-page/offer-page";
import SignIn from "../sign-in/sign-in";

import offers from "../../mocks/offers";

const App = () => {
  const getOffer = (pathname) => {
    const id = +pathname.replace(`/offer/`, ``);

    return offers.find((item) => item.id === id);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            offers={offers}
          />
        </Route>
        <Route exact path="/favorites">
          <Favorites offers={offers} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>

        <Route
          exact
          path="/offer/:id?"
          render={({history}) => (
            <OfferPage
              offer={getOffer(history.location.pathname)}
            />
          )}
        />
        <Route>
          <h2>Page 404</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
