import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});

export { httpRequest };

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};
