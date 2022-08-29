import { kaneRequest } from '../utils/httpRequest';

export const search = async (q, type) => {
    try {
        const res = await kaneRequest.get(`user/search`, {
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
