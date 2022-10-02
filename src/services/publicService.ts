import axios from "axios";

export const get = async (endpoint: string) => {
  const response: {data: any, error: any} = { data: null, error: null };

  try {
    const { data } = await axios.get(endpoint);
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

export const post = async (endpoint: string, body: {[key: string]: unknown}) => {
  const response = { data: null, error: null };
  try {
    const { data } = await axios.post(endpoint, body);
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};
