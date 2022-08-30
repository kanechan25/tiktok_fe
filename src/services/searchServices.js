import { httpRequest } from '../utils/httpRequest';

export const searchServices = async (q, n) => {
    try {
        const res = await httpRequest.get(`/api/search?q=${q}&n=${n}`);
        if (res) {
            return res;
        }
    } catch (error) {
        console.log(error);
    }
};
