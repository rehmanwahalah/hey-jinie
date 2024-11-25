import apiClient from './apiClient';

// Login API
export const login = async (email: string, password: string) => {
  const response = await apiClient.post('/customer/login', { email, password });
  return response.data;
};

// Register API
export const register = async (userData: any) => {
  const response = await apiClient.post('/customer/register', userData);
  return response.data;
};

// Verify OTP
export const verifyOtp = async (email: string, otp: string) => {
  const response = await apiClient.put('/customer/verify-otp', { email, otp });
  return response.data;
};
