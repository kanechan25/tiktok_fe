import { httpRequest } from '../utils/httpRequest';

const getAllUserService = () => {
    return httpRequest.get('/api/user');
};

const getFollowedUserService = () => {
    return httpRequest.get('/api/user/followed');
};

const getSuggestedUserService = () => {
    return httpRequest.get('/api/user/suggested');
};

export { getAllUserService, getFollowedUserService, getSuggestedUserService };
