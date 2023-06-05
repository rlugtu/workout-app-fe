import { getAccessToken } from '@/stores';
import type { User, Exercise } from '@/types';
import axios from 'axios';

/**
 * The backend Url
 * @type {*} */
const apiUrl: string = import.meta.env.VITE_API_SERVER_URL;

/**
 * Gets all of the user's exercises
 *
 * @export
 * @return {*}  {(Promise<User | void>)}
 */
export async function getExercises(): Promise<Exercise[]> {
    try {
        const accessToken = await getAccessToken();
        const res = await axios.get(`${apiUrl}/exercises`, {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return res.data;
    } catch (error) {
        return [];
        /* empty */
    }
}

/**
 * Creates an exercise and returns it upon a successful post request.
 * TODO: test
 *
 * @export
 * @param {(Omit<Exercise, 'id' | 'ownderId'>)} exercise
 * @return {*}  {(Promise<Exercise | void>)}
 */
export async function createExercise(
    exercise: Omit<Exercise, 'id' | 'ownerId'>,
): Promise<Exercise | void> {
    try {
        const accessToken = await getAccessToken();
        const res = await axios.post(`${apiUrl}/exercises`, exercise, {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return res.data;
    } catch (error) {
        return;
    }
}
