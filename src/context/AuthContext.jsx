import { createContext, useContext, useState, useEffect } from "react";

// Buat Context
const AuthContext = createContext();

// Provider Auth untuk membungkus seluruh aplikasi
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Cek localStorage untuk melihat apakah user sudah login
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook untuk mengakses AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
