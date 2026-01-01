import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";
import { apiLogin, apiSignup, apiGetMe } from "../api/client";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      setInitializing(false);
      return;
    }

    apiGetMe()
      .then((u) => setUser(u))
      .catch(() => {
        localStorage.removeItem("authToken");
        setUser(null);
      })
      .finally(() => setInitializing(false));
  }, []);

  const login = async (email, password) => {
    const { token, user } = await apiLogin({ email, password });
    localStorage.setItem("authToken", token);
    setUser(user);
    return user;
  };

  const signup = async (name, email, password) => {
    const { token, user } = await apiSignup({ name, email, password });
    localStorage.setItem("authToken", token);
    setUser(user);
    return user;
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, initializing, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}



