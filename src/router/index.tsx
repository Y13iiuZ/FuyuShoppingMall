import { RouteObject } from "react-router-dom";
import Login from "../components/Login";
import Count from "../components/Count";
import List from "../components/List";
import Error from "../components/NotPage";
import Play from "../components/Play";
import PlayGame from "../components/PlayGame";
import Home from "../App";
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
        path: "list",
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
];

export default routes;
