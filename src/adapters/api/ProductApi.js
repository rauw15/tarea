import axios from 'axios';

const baseURL = 'http://localhost:4000/user';

export const registerRequest = async (userData) => {
  try {
    const response = await axios.post(`${baseURL}/register`, userData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const loginRequest = async (userData) => {
  try {
    const response = await axios.post(`${baseURL}/login`, userData);
    return response;
  } catch (error) {
    throw error;
  }
};

