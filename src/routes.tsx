import type { RouteObject } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MenShirt from "./pages/shop/MenShirt";
import WomenShirt from "./pages/shop/WomenShirt";

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop/men/tshirt", element: <MenShirt /> },
      { path: "/shop/women/tshirt", element: <WomenShirt /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];
