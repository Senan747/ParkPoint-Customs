import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

interface User {
  id: string;
  email: string;
  name: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  const signIn = async (email: string, password: string) => {
    const mockUser = {
      id: "1",
      email: "johndoe@example.com",
      name: "John Doe",
      password: "helloJohn",
    };

    if (email === mockUser.email && password === mockUser.password) {
      setUser({
        id: mockUser.id,
        email: mockUser.email,
        name: mockUser.name,
      });
    } else {
      throw new Error("Invalid email or password");
    }
  };

  const signOut = () => {
    setUser(null);
  };

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
