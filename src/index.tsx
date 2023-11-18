import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./router";
import "./index.scss";
import './mock';
import "antd/dist/reset.css";
import reportWebVitals from "./reportWebVitals"; /* 启用性能测量和报告功能 */
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(Routes)} />
  </React.StrictMode>
);
reportWebVitals();
