import axios from 'axios';

// const setAuthToken = (token) => {
//     if (token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     } else {
//         delete axios.defaults.headers.common.Authorization;
//     }
// };
// export default setAuthToken;

// const f8Request = axios.create({
//     baseURL: process.env.REACT_APP_BASE_URL,
// });

const kaneRequest = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});

export { kaneRequest };

export const get = async (path, options = {}) => {
    const response = await kaneRequest.get(path, options);
    return response.data;
};
