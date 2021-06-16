import React from 'react';

export interface User {
  name: string;
}

export interface AuthContextValues {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextValues>({
  user: null,
  isAuthenticated: false,
  login: (user: User) => {
    throw new Error('auth error');
  },
  logout: () => {
    throw new Error('auth error');
  },
}); // or ({} as AuthContextValues) or undefined but then we need to check it

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = (user: User) => {
    setUser(user);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/**
 * With this form, we can use useAuthContext in components and the context will never be undefined
 */
export const useAuthContext = () => {
  const context = React.useContext(AuthContext);

  return context;
};
