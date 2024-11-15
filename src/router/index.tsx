import { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./router";
import Header from "../components/Header";

interface RouteConfig {
  path: string;
  title?: string;
  element: ReactNode;
  children?: RouteConfig[];
}

const renderRoutes = (routes: RouteConfig[]) =>
  routes.map(({ path, element, children }, index) => (
    <Route key={index} path={path} element={element}>
      {children && children.length > 0 && renderRoutes(children)}
    </Route>
  ));

const Router = () => {
  const pageRoutes = renderRoutes(routes);

  return (
    <>
      <Header />
      <Routes>{pageRoutes}</Routes>
    </>
  );
};

export default Router;
