import React from "react";
import { RouteObject } from "react-router-dom";
import Login from "../components/Login";
import Count from "../components/Count";
import List from "../components/List";
import Error from "../components/NotPage";
import Play from "../components/Play";
import PlayGame from "../components/PlayGame";
import Home from "../App";
import GoodDetails from "../components/GoodDetails";
import Me from "../components/Me";
// const GoodDetails = React.lazy(() => import("../components/GoodDetails"));
const WantMeDo = React.lazy(() => import("../components/WantMeDo"));
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/count",
    element: <Count />,
  },
  {
    path: "/login",
    element: <Login />,
    children: [
      {
        path: "list/:id",
        element: <List />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/plays",
    element: <Play />,
  },
  {
    path: "/play/game",
    element: <PlayGame />,
  },
  {
    path: "/goodDetails",
    element: <GoodDetails />,
  },
  {
    path: "/me",
    element: <Me />,
  },
  {
    path: "/sMeDo",
    element: <WantMeDo />,
  },
];

export default routes;
