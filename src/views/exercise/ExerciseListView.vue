<template>
    <div>
        <TopBar :header="'Exercise Store'"></TopBar>
        <h1 class="text-green-500 text-3xl font-bold">Exercises</h1>
        <div class="mt-4 grid grid-cols-1 gap-4">
            <template v-for="exercise in exerciseList" :key="exercise.id">
                <RouterLink :to="'/exercises/' + exercise.id">
                    <ExerciseListButton :exercise="exercise"></ExerciseListButton>
                </RouterLink>
            </template>
        </div>

        <AddButton
            :color="'text-green-400'"
            @clicked="toggleCreateExerciseModal"
            class="fixed bottom-[80px] right-[10px]"
        ></AddButton>

        <Overlay v-if="isCreatingExercise">
            <button @click="toggleCreateExerciseModal">LMAOI</button></Overlay
        >
    </div>
</template>

<script setup lang="ts">
import { AddButton, ExerciseListButton, Overlay, TopBar } from '@/components';
import { exerciseListStub } from '@/stubs';
import type { Exercise } from '@/types';
import { onMounted, ref } from 'vue';

/**
 * The list of exercises used by the template to render buttons that
 * will link to a single exercise page.
 *
 * TODO: switch out stubs once api is up.
 */
const exerciseList = ref<Exercise[]>(exerciseListStub);

/**
 * Template handler to decide whether or not to show the create Exercise Modal.
 */
const isCreatingExercise = ref<boolean>(false);

/**
 * Method used by the AddButton component to toggle the create Exercise Modal.
 */
function toggleCreateExerciseModal(): void {
    isCreatingExercise.value = !isCreatingExercise.value;
}

onMounted(() => {});
</script>
