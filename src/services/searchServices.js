import * as httpRequest from '../utils/httpRequest';

export const search = async (q, type) => {
    try {
        const res = await httpRequest.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        if (res && res.data) {
            return res.data;
        }
    } catch (error) {
        console.log(error);
    }
};
