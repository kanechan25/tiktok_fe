import * as request from '~/utils/request';

export const search = async (q, type) => {
    try {
        const res = await request.get(`users/search`, {
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
