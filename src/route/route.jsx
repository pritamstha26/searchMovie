import CardList from "../page/CardList/CardList";
import CardMain from "../page/CardMain/CardMain";
import NotFound from "../page/NotFound/NotFound";

const router = [
  {
    path: "/",
    element: <CardList />,
  },
  {
    path: "/main/:id",
    element: <CardMain />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
];

export default router;
