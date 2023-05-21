<template>
    <RouterView />
    <header>
        <NavBar></NavBar>
    </header>
</template>
<style></style>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { NavBar } from '@/components';
</script>
