import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

let root = createRoot(document.getElementById("root") as HTMLElement);

const store = setupStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
