import axios from '../utils/httpRequest';

const loginGoogleService = (tokenData) => {
    return axios.post('/api/google-login', tokenData);
};

export { loginGoogleService };
