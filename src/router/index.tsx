import { Route, Routes } from "react-router-dom";
import { routes } from "./router";
import Header from "../components/Header";
import { RouteConfig } from "../types";
import { AuthProvider } from "../hooks/useAuth";

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
      <AuthProvider>
        <Header />
        <Routes>{pageRoutes}</Routes>
      </AuthProvider>
    </>
  );
};

export default Router;
