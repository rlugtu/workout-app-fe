<template>
    <div class="flex flex-col pb-4">
        <h1 class="text-3xl">Header</h1>
        <h2 class="text-gray">{{ currentDate }}</h2>
    </div>
</template>

<script setup lang="ts">
const currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
</script>
