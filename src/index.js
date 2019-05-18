import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app.js";

if (!sessionStorage.getItem("products"))
  sessionStorage.setItem("products", JSON.stringify([]));
if (!sessionStorage.getItem("cart"))
  sessionStorage.setItem("cart", JSON.stringify([]));

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
