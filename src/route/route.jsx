import { Navigate } from "react-router-dom";
import CardList from "../page/CardList/CardList";
import CardMain from "../page/CardMain/CardMain";
import NotFound from "../page/NotFound/NotFound";
import MovieLayout from "../Layout/MovieLayout/MovieLayout";

const router = [
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },

  {
    path: "/",
    element: <MovieLayout />,
    children: [
      {
        path: "home",
        element: <CardList />,
      },
      {
        path: "home/:id",
        element: <CardMain />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
];

export default router;
