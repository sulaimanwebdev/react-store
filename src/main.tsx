import React from "react";
import ReactDOM from "react-dom/client";
import "regenerator-runtime/runtime";
import "./index.css";
import { browserRouter } from "./Router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={browserRouter} />
);
