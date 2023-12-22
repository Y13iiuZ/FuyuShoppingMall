import React from "react";
import { RouteObject } from "react-router-dom";
const Login = React.lazy(() => import( "../components/Login"));
const Count = React.lazy(() => import( "../components/Count"));
const List = React.lazy(() => import( "../components/List"));
const Error = React.lazy(() => import( "../components/NotPage"));
const Play = React.lazy(() => import( "../components/Play"));
const PlayGame = React.lazy(() => import( "../components/PlayGame"));
const Home = React.lazy(() => import( "../App"));
const GoodDetails = React.lazy(() => import( "../components/GoodDetails"));
const Me = React.lazy(() => import( "../components/Me"));
const WantMeDo = React.lazy(() => import("@/components/WantMeDo"));
const UserLogin = React.lazy(() => import("../components/UserLogin"));
const UserRegist = React.lazy(() => import("../components/UserRegist"));
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
  {
    path: "/UserLogin",
    element: <UserLogin />,
  },
  {
    path: "/UserRegist",
    element: <UserRegist />,
  }
];

export default routes;
