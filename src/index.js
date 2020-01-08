import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";
import App from "./components/App";

import AuthContextProvider from "./contexts/AuthContext";
import PagesContextProvider from "./contexts/PagesContext";
import TodoListContextProvider from "./contexts/TodoListContext";
import WeatherContextProvider from "./contexts/WeatherContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./dark-theme-bootstrap.css";

ReactDOM.render(
  <AuthContextProvider>
    <PagesContextProvider>
      <TodoListContextProvider>
        <WeatherContextProvider>
          <Router>
            <App />
          </Router>
        </WeatherContextProvider>
      </TodoListContextProvider>
    </PagesContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register(); // offline
