import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import Main from "../pages/Main";

ReactDOM.render(
  <Auth0Provider
    domain="dev-udkffa48qzrzmfij.us.auth0.com"
    clientId="0741SZDMdOhyvBfKUqnWasGl630iarqq"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Main />
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);


