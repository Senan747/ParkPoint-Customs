import React from "react";
import Home from "../features/Home";
import Auth from "../features/Auth";

export const routes = [
  {
    path: "",
    title: "Home",
    element: React.createElement(Home),
  },
  {
    path: "/register",
    title: "Auth",
    element: React.createElement(Auth),
  },
];
