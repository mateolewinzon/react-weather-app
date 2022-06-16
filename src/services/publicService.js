import axios from "axios";

export const get = async (endpoint) => {
  const response = { data: {}, error: null };

  try {
    const { data } = await axios.get(endpoint);
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

export const post = async (endpoint, body) => {
  const response = { data: {}, error: null };

  try {
    const { data } = await axios.post(endpoint, body);
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};
