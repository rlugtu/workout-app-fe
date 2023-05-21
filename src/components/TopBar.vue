<template>
    <div class="flex flex-col pb-4">
        <h1 class="text-3xl">{{ header }}</h1>
        <h2 class="text-gray">{{ currentDate }}</h2>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

/**
 * Props handed down from the parent. Deconstructed via toRefs.
 * - header: The title that will be displayed in the template.
 */
const props = defineProps<{
    header: string;
}>();
const { header } = toRefs(props);

/**
 * Todays date displayed in the template.
 */
const currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
</script>
