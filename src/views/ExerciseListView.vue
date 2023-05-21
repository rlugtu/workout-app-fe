<template>
    <h1 class="text-green-500 text-3xl font-bold">Exercises</h1>
    <div class="mt-4 grid grid-cols-1 gap-4">
        <template v-for="exercise in exerciseList" :key="exercise.id">
            <ExerciseListButton :exercise="exercise"></ExerciseListButton>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ExerciseListButton } from '@/components';
import type { Exercise } from '@/types';
import { onMounted, ref } from 'vue';

/**
 * The list of exercises used by the template to render buttons that
 * will link to a single exercise page.
 */
const exerciseList = ref<Exercise[]>([
    {
        id: 'testId',
        name: 'Bench',
        note: 'Bench Notes',
        type: 'weight',
        ownerId: 'ryan',
    },
    {
        id: 'testId',
        name: 'Deadlift',
        note: 'Deadlift Notes',
        type: 'duration',
        ownerId: 'ryan',
    },
    {
        id: 'testId',
        name: 'Tennis',
        note: 'Deadlift Notes',
        type: 'activity',
        ownerId: 'ryan',
    },
    {
        id: 'testId',
        name: 'Planks',
        note: 'Deadlift Notes',
        type: 'timed',
        ownerId: 'ryan',
    },
    {
        id: 'testId',
        name: 'Wallsits Maxout',
        note: 'Deadlift Notes',
        type: 'duration',
        ownerId: 'ryan',
    },
    {
        id: 'testId',
        name: 'Running',
        note: 'Deadlift Notes',
        type: 'distance',
        ownerId: 'ryan',
    },
]);

onMounted(() => {
    console.log('hey', exerciseList);
});
</script>
