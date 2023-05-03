<script setup lang="ts">
import { ref, type Ref } from "vue"
interface Test {
    name: string;
    phone: number;
}
/**
 * This is a count reference
 */
const count: Ref<Test> = ref({
    name: 'Name',
    phone: 1
})

function increment(): void {
    count.value.phone++
}
</script>
<template>
    <h1 class="text-red-400">Count</h1>
    <p>{{ count.phone }}</p>
    <button class="px-2 py-2 rounded-lg bg-slate-400" @click="increment()">click me</button>
</template>
