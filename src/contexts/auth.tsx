import { useState, createContext, useContext, ReactNode } from 'react';
import api from '../services/api';

interface User {
  email: string | undefined;
  password?: string | undefined;
}

interface AuthContextData {
  verifyUserCredentials: ({ email, password }: User) => Promise<void>;
  signOut: () => void;
  apiData: any;
  userData: User | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUserData] = useState<User | null>(() => {
    const user = localStorage.getItem('user');

    if (user) {
      return JSON.parse(user);
    }

    return null;
  });

  const [apiData, setApiData] = useState();

  async function verifyUserCredentials({ email, password }: User) {
    const token = btoa(`${email}:${password}`);

    const date_start = '2021-06-01';
    const date_end = '2021-06-30';

    try {
      const res = await api.get(
        `payments?date_start=${date_start}&date_end=${date_end}`,
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            token,
          },
        }
      );
      localStorage.setItem('user', JSON.stringify({ email }));

      setApiData(res.data);
      setUserData({ email });
    } catch {
      alert('Usuário não encontrado! Verifique suas credenciais.');
    }
  }

  function signOut() {
    localStorage.removeItem('user');
    setUserData(null);
  }

  return (
    <AuthContext.Provider
      value={{ signOut, verifyUserCredentials, userData, apiData }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
