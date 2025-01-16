import { ReactNode } from "react";

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: VoidFunction;
}

export interface ButtonProps {
  text: string;
  onClick: VoidFunction;
  disabled?: boolean;
}

export interface LoginPopupProps {
  open: boolean;
  close: VoidFunction;
}

export interface RouteConfig {
  path: string;
  title?: string;
  element: ReactNode;
  children?: RouteConfig[];
}
