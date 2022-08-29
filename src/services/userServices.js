import { kaneRequest } from '../utils/httpRequest';

const getAllUserService = () => {
    return kaneRequest.get('/api/user');
};

const getFollowedUserService = () => {
    return kaneRequest.get('/api/user/followed');
};

const getSuggestedUserService = () => {
    return kaneRequest.get('/api/user/suggested');
};

export { getAllUserService, getFollowedUserService, getSuggestedUserService };
