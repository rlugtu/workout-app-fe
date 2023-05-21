<template>
    <button @click="clicked">
        <font-awesome-icon icon="fa solid fa-plus-circle" class="text-5xl" :class="props.color" />
    </button>
</template>

<script setup lang="ts">
/**
 * The color of the button. Must be a tailwind class.
 */
const props = defineProps({
    color: String,
});

const emits = defineEmits<{
    (e: 'clicked'): void;
}>();

/**
 * Emits to the parent component that this button has been clicked.
 */
function clicked(): void {
    emits('clicked');
}
</script>
