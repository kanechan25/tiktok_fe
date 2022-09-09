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

const getIsVideoUserService = (n) => {
    // console.log('n query is:', n);
    return httpRequest.get(`/api/user/isvideo?n=${n}`);
};

export {
    getAllUserService,
    getFollowedUserService,
    getSuggestedUserService,
    getIsVideoUserService,
};
