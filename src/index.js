import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import LayoutDirectionControlller from "./layout/LayoutDirection/LayoutDirectionControlller";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <LayoutDirectionControlller>
    <App />
  </LayoutDirectionControlller>
);
