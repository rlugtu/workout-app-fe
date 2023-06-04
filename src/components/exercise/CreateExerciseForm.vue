<template>
    <form action="" class="flex flex-col gap-2">
        <label for="exerciseName"></label>
        <input type="text" v-model="exerciseInfo.name" />
        <label for="exerciseNote"></label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <label for="exerciseType"></label>
        <div class="flex gap-21">
            <div v-for="option of exerciseTypes" :key="option.type">
                <button>{{ option.type }}</button>
            </div>
        </div>
        <div class="flex gap-2 justify-evenly">
            <button type="button" @click="cancel">Cancel</button>
            <button type="submit">Submit</button>
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
}>();

const exerciseInfo: Partial<Exercise> = {
    name: '',
    note: '',
    type: 'weight',
};
const exerciseTypes: WeightOption[] = [
    {
        icon: '',
        type: 'weight',
    },
    {
        icon: '',
        type: 'timed',
    },
    {
        icon: '',
        type: 'duration',
    },
    {
        icon: '',
        type: 'duration',
    },
    {
        icon: '',
        type: 'activity',
    },
];

function cancel(): void {
    emits('cancel');
}
</script>
