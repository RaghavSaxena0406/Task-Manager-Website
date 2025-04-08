import axios from "axios";

// Try both HTTP and HTTPS endpoints
const BASE_URLS = [
  "https://localhost:7159/api/TaskManagement",
  "http://localhost:5154/api/TaskManagement"
];

// Create axios instance with default config
const api = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Function to try multiple URLs
const tryRequest = async (method, url, data = null) => {
  for (const baseUrl of BASE_URLS) {
    try {
      const response = await api({
        method,
        url: `${baseUrl}${url}`,
        data
      });
      return response;
    } catch (error) {
      if (error.code === 'ERR_NETWORK') {
        console.log(`Failed to connect to ${baseUrl}, trying next...`);
        continue;
      }
      throw error;
    }
  }
  throw new Error('Could not connect to any of the API endpoints');
};

export const getTasks = () => tryRequest('get', '');
export const createTask = (task) => 
  tryRequest('post', '', { ...task, createdAt: new Date().toISOString() });
export const updateTask = (id, task) => 
  tryRequest('put', `/${id}`, task);
export const deleteTask = (id) => 
  tryRequest('delete', `/${id}`);
