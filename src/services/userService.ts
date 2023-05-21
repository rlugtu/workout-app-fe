import axios, { type AxiosResponse } from 'axios';

export async function getUserInfo(accessToken: string): Promise<AxiosResponse<any, any>> {
    const apiUrl = import.meta.env.VITE_API_SERVER_URL;
    const config = {
        url: `${apiUrl}/api/messages/public`,
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    };
    const res = await axios.get(`${apiUrl}/user-service`, {
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    });
    console.log(res.data);
    return res.data;
}
