import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "@containers/App";
import store from "@store/index";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100vh;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
