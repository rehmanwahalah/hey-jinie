import { useState } from 'react';
import { login } from '@/services/authService';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    try {
      const data = await login(email, password);
      setUser(data.user);
      localStorage.setItem('token', data.token);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, loginUser };
};
