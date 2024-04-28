import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { reactBridge } from '@garfish/bridge-react';
import RootComponent from './App';
import NotPage from "./components/NotPage";
import Routes from "./router";
import "./index.scss";
import "./mock";
import "antd/dist/reset.css";
import reportWebVitals from "./reportWebVitals"; /* 启用性能测量和报告功能 */
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <Suspense>
    <RouterProvider router={createBrowserRouter(Routes, {basename: process.env.NODE_ENV === 'production' ? '/examples/subapp/react18' : '/'})}/>
    </Suspense>
);
reportWebVitals();

export const provider = reactBridge({
  el: '#root',
  rootComponent: RootComponent,
  errorBoundary: (e: any) => <NotPage />,
});
