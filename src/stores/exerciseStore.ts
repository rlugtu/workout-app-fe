import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

interface Exercise {
    id: string;
    name: string;
}

type StateShape = {
    list: Exercise[];
};
export const useExerciseStore = defineStore('ExerciseStore', {
    state: (): StateShape => ({
        list: [],
    }),
    getters: {},
    actions: {},
});
