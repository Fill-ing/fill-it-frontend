import { createBrowserRouter, type RouteObject } from "react-router-dom";
import Layout from "../components/ui/layout/Layout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [],
  },
];

export const router = createBrowserRouter(routes);
