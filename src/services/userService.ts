import { getAccessToken } from '@/stores';
import type { User } from '@/types';
import axios from 'axios';

/**
 * The backend Url
 * @type {*} */
const apiUrl: string = import.meta.env.VITE_API_SERVER_URL;

/**
 * Makes a call to obtain the user object. If no user is found, will return
 * undefined
 *
 * @export
 * @param {string} accessToken The access token obtained via auth0
 * @return {*} Promise<User | undefined>
 */
export async function getUserInfo(): Promise<User | void> {
    try {
        const accessToken = await getAccessToken();
        const res = await axios.get(`${apiUrl}/user-service`, {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return res.data;
    } catch (error) {
        /* empty */
    }
}
