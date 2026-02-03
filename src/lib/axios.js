import Axios from 'axios';
import { queryClient } from './react-query';
import { API_URL } from '../utils/constants';
import { FORM_DATA_API_SET } from '../utils/sets';
import { getGuestCartId } from '../utils/guest-cart-utils';

export const axios = Axios.create({
  baseURL: API_URL,
});

const authRequestInterceptor = config => {
  const token = localStorage.getItem('authToken');

  // Ensure headers are initialized
  config.headers = config.headers || {};

  // Set the Authorization header if the token exists
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  config.headers['ngrok-skip-browser-warning'] = 'true';
  // Set the Accept header to "application/json"
  config.headers['Accept'] = 'application/json';



  return config;
};

// Set up the request interceptor
axios.interceptors.request.use(authRequestInterceptor);

// Set up the response interceptor
axios.interceptors.response.use(
  response => {
    // For blob responses, return the full response object to access headers
    // For other responses, return only the data
    if (response.config?.responseType === 'blob') {
      return response;
    }
    return response.data; // Return only the data from the response
  },
  error => {
    const status = error.response?.status || 200;

    // Handle 401 Unauthorized errors
    if (status === 401) {
      localStorage.clear();
      queryClient.clear();
      window.location.href = '/';
    }

    return Promise.reject(error);
  }
);
