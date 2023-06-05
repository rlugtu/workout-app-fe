<template>
    <form
        action=""
        class="flex flex-col gap-2 bg-slate-700 bg-opacity-40 p-6 rounded-lg w-full"
        @submit.prevent="submitForm"
    >
        <h1 class="text-3xl font-bold text-green-500 pb-2 border-b border-gray">New Exercise</h1>
        <label class="text-xl" for="exerciseName">Name</label>
        <input
            class="bg-transparent border border-gray p-2 rounded-md outline-none text-lg"
            type="text"
            v-model="exerciseInfo.name"
        />
        <label class="mt-4 text-xl" for="exerciseNote">Notes</label>
        <textarea
            class="bg-transparent border border-gray p-2 rounded-md outline-none text-lg"
            name=""
            id=""
            cols="30"
            rows="10"
            v-model="exerciseInfo.note"
        ></textarea>
        <label class="mt-2 text-xl" for="exerciseType">Type</label>
        <div>
            <select
                name=""
                id=""
                class="w-full bg-transparent border border-gray p-2 rounded-md outline-none text-lg"
                v-model="exerciseInfo.type"
            >
                <option
                    v-for="option of exerciseTypes"
                    :key="option.type"
                    :value="option.type"
                    class="bg-transparent border border-gray p-2 rounded-md outline-none"
                >
                    {{ option.type }}
                </option>
            </select>
        </div>
        <div class="flex gap-2 justify-evenly mt-6">
            <button class="bg-red-500 p-2 rounded-md min-w-[100px]" type="button" @click="cancel">
                Cancel
            </button>
            <button class="bg-green-500 p-2 rounded-md min-w-[100px]" type="submit">Submit</button>
        </div>
    </form>
</template>

<script lang="ts" setup>
interface WeightOption {
    icon: string;
    type: ExerciseType;
}
import type { Exercise, ExerciseType } from '@/types';

const emits = defineEmits<{
    (e: 'cancel'): void;
    (e: 'submit', exercise: Omit<Exercise, 'id' | 'ownerId'>): void;
}>();

const exerciseInfo: Omit<Exercise, 'id' | 'ownerId'> = {
    name: '',
    note: '',
    type: 'weight',
};
const exerciseTypes: WeightOption[] = [
    {
        icon: 'fa-solid fa-dumbbell',
        type: 'weight',
    },
    {
        icon: 'fa-solid fa-hourglass',
        type: 'timed',
    },
    {
        icon: 'fa-solid fa-stopwatch',
        type: 'duration',
    },
    {
        icon: 'fa-solid fa-person-running',
        type: 'distance',
    },
    {
        icon: 'fa-solid fa-table-tennis',
        type: 'activity',
    },
];

function cancel(): void {
    emits('cancel');
}

function submitForm(): void {
    console.log(exerciseInfo);
    emits('submit', exerciseInfo);
}
</script>
