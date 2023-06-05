<template>
    <div v-if="loading">
        <Overlay>
            <LoadingScreen></LoadingScreen>
        </Overlay>
    </div>
    <div v-else>
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
            <div class="flex flex-col max-w-[600px] w-full">
                <CreateExerciseForm
                    @cancel="toggleCreateExerciseModal"
                    @submit="submitCreateExerciseForm"
                ></CreateExerciseForm>
            </div>
        </Overlay>
    </div>
</template>

<script setup lang="ts">
import {
    AddButton,
    ExerciseListButton,
    CreateExerciseForm,
    Overlay,
    TopBar,
    LoadingScreen,
} from '@/components';
import { exerciseListStub } from '@/stubs';
import type { Exercise } from '@/types';
import { onMounted, ref } from 'vue';
import { createExercise, getExercises } from '@/services';

/**
 * Used to show the loading screen until data exercises are obtained.bro
 */
const loading = ref<boolean>(true);

/**
 * The list of exercises used by the template to render buttons that
 * will link to a single exercise page.
 *
 * TODO: switch out stubs once api is up.
 */
const exerciseList = ref<Exercise[]>();

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

/**
 * Creates a new exercise via the create exercise form component.
 * @param ex
 */
async function submitCreateExerciseForm(ex: Omit<Exercise, 'id' | 'ownerId'>): Promise<void> {
    console.log('yer', ex);
    const test = await createExercise(ex);
    console.log({ test });
}

onMounted(async () => {
    exerciseList.value = await getExercises();
    loading.value = false;

    if (!exerciseList.value?.length) {
        exerciseList.value = exerciseListStub;
    }
});
</script>
