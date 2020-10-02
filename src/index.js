import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Setting = {
  PLACES_COUNT: 312,
};

ReactDOM.render(
    <App placesCount={Setting.PLACES_COUNT}/>,
    document.querySelector(`#root`)
);
