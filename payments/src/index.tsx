import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const rootNode = document.getElementById("root") as Element;

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);