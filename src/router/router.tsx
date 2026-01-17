import { createBrowserRouter, type RouteObject } from "react-router-dom";
import FunnelPage from "../components/domain/funnel/FunnelPage";
import Layout from "../components/ui/layout/Layout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "funnel",
        element: <FunnelPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
