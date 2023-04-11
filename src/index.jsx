import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import GlobalStyle from "./globalStyles";

const rootComponent = (
  <>
    <GlobalStyle />
    <App />
  </>
);

ReactDOM.render(rootComponent, document.getElementById("root"));
