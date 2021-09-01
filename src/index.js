import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RestaurandProvider } from "./restaurant-context/RestaurandProvider";

ReactDOM.render(
  <React.StrictMode>
    <RestaurandProvider>
      <App />
    </RestaurandProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
