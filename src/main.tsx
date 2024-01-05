import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/css/jsvectormap.css";
import "./brasil";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

const map = new jsVectorMap({
  selector: "#map",
  map: "brasil",

  regionStyle: {
    initial: {
      fill: "#ff5566",
      stroke: "#676767",
      strokeWidth: 2.5,
      fillOpacity: 1,
    },
  },
});
