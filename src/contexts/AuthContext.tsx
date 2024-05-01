import { ReactElement, createContext, useContext, useState } from "react";

type Token = string | null;

interface AuthContextType {
  token: Token;
  setToken: (token: Token) => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

interface AuthProviderProps {
  children?: ReactElement;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<Token>(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  return useContext(AuthContext);
};
