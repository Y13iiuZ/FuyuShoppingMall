import React from "react";
import { RouteObject } from "react-router-dom";
const Login = React.lazy(() => import( "../components/Login"));
const Count = React.lazy(() => import( "../components/Count"));
// const Order = React.lazy(() => import( "../components/Order"));
const Order = React.lazy(() => import('../encapsulationTemplate/TabBars'));
const List = React.lazy(() => import( "../components/List"));
const ListTwo = React.lazy(() => import( "../components/ListTwo"));
const ListThree = React.lazy(() => import( "../components/ListThree"));
const Error = React.lazy(() => import( "../components/NotPage"));
const Play = React.lazy(() => import( "../components/Play"));
const PlayGame = React.lazy(() => import( "../components/PlayGame"));
const RandomStudy = React.lazy(() => import( "../components/RandomStudy"));
const Home = React.lazy(() => import( "../App"));
const GoodDetails = React.lazy(() => import( "../components/GoodDetails"));
const Me = React.lazy(() => import( "../components/Me"));
const WantMeDo = React.lazy(() => import("@/components/WantMeDo"));
const UserLogin = React.lazy(() => import("../components/UserLogin"));
const UserRegist = React.lazy(() => import("../components/UserRegist"));
const GameAll = React.lazy(() => import("../components/GameAll"));
const UserSetting = React.lazy(() => import("../components/UserSetting"));
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
    path: "/order",
    element: <Order />,
  },
  {
    path: "/userSetting",
    element: <UserSetting />,
  },
  {
    path: "/login",
    element: <Login />,
    children: [
      {
        path: "list/:id",
        element: (<div style={{ display: "flex",justifyContent:"space-between" }}><List /><ListTwo /><ListThree /></div>),
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/playsone",
    element: <Play />,
  },
  {
    path: "/playstwo",
    element: <PlayGame />,
  },
  {
    path: "/playsthree",
    element: <RandomStudy />,
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
  },
  {
    path: "/fpGameAll",
    element: <GameAll />,
  },
];

export default routes;
