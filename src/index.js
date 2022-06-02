import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.scss";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-9zut-zjy.us.auth0.com"
      // clientId="MfsFzNAtr8zVptMZAbbIioeF9Ua5ykfv"
      clientId="yunn6UVCKAMX4r9yxjsuwakyXZ5GVkaB"
      // clientId="xXdvX1e2qAYMSbVWreKZf1cYDtyYI5sI"
      redirectUri={window.location.origin}
      // audience="https://main--incomparable-tiramisu-56e563.netlify.app/api/v2/"
      audience="https://main--incomparable-tiramisu-56e563.netlify.app/"
      scope="read:current_user update:current_user_metadata"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
