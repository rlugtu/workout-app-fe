<template>
    <div
        class="w-full flex justify-between items-center bg-slate-700 bg-opacity-40 px-2 py-4 rounded-lg cursor-pointer text-lg text-green-400"
    >
        <span>
            {{ exercise.name }}
        </span>
        <font-awesome-icon :icon="icons[exercise.type]" />
    </div>
</template>

<script setup lang="ts">
import type { Exercise, ExerciseType } from '@/types';
import { ref, toRefs } from 'vue';

const props = defineProps<{
    exercise: Exercise;
}>();

/**
 * The exercise that who's info will be displayed in the template.
 */
const { exercise } = toRefs(props);

/**
 * Object containing the possible icons to be displayed based off the @Exercise type.
 */
const icons = ref<Record<ExerciseType, string>>({
    weight: 'fa-solid fa-dumbbell',
    timed: 'fa-solid fa-hourglass',
    duration: 'fa-solid fa-stopwatch',
    distance: 'fa-solid fa-person-running',
    activity: 'fa-solid fa-table-tennis',
});
</script>
