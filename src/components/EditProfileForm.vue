<template>
    <form action="" class="bg-gray-500 grid grid-cols-1 gap-4 text-lg" @submit.prevent="submitForm">
        <label for="displayName">Name</label>
        <input
            type="text"
            id="displayName"
            v-model="userInfo.displayName"
            placeholder="John Doe"
            class="bg-transparent border border-gray p-2 rounded-md outline-none"
        />

        <div class="flex flex-col justify-between mt-4">
            <span>Weight Metric</span>
            <div class="w-full flex items-center mt-2 justify-between">
                <input
                    type="number"
                    v-model="userInfo.weight"
                    class="bg-transparent border border-gray p-2 rounded-md outline-none"
                    :placeholder="
                        userInfo.settings.weightMetric === 'kilogram' ? 'Kilograms' : 'Pounds'
                    "
                />
                <div>
                    <button
                        class="border border-gray p-2 w-[50px] h-[46px] rounded-tl-lg rounded-bl-lg"
                        :class="userInfo.settings.weightMetric === 'kilogram' && 'bg-blue-600'"
                        type="button"
                        @click="emits('changeWeightMetric', 'kilogram')"
                    >
                        kg
                    </button>
                    <button
                        class="border border-gray p-2 w-[50px] h-[46px] rounded-tr-lg rounded-br-lg"
                        :class="userInfo.settings.weightMetric === 'pounds' && 'bg-blue-600'"
                        type="button"
                        @click="emits('changeWeightMetric', 'pounds')"
                    >
                        lb
                    </button>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-between mt-4">
            <span>Distance Metric</span>
            <div class="w-full flex items-center mt-2 justify-between">
                <input
                    type="number"
                    v-model="userInfo.height"
                    :placeholder="userInfo.settings.distanceMetric === 'metric' ? 'Meters' : 'Feet'"
                    class="bg-transparent border border-gray p-2 rounded-md outline-none"
                />

                <div>
                    <button
                        class="border border-gray p-2 w-[50px] h-[46px] rounded-tl-lg rounded-bl-lg"
                        :class="userInfo.settings.distanceMetric === 'metric' && 'bg-blue-600'"
                        type="button"
                        @click="emits('changeDistanceMetric', 'metric')"
                    >
                        m
                    </button>
                    <button
                        class="border border-gray p-2 w-[50px] h-[46px] rounded-tr-lg rounded-br-lg"
                        :class="userInfo.settings.distanceMetric === 'imperial' && 'bg-blue-600'"
                        type="button"
                        @click="emits('changeDistanceMetric', 'imperial')"
                    >
                        ft
                    </button>
                </div>
            </div>
        </div>
        <input
            class="mt-6 bg-blue-500 w-[120px] p-2 rounded-lg mx-auto cursor-pointer"
            type="submit"
            value="Sign up"
        />
    </form>
</template>

<script setup lang="ts">
import type { DistanceMetric, User, WeightMetric } from '@/types';
import { ref } from 'vue';

const emits = defineEmits<{
    (e: 'updateUserInfo'): void;
    (e: 'changeDistanceMetric', data: DistanceMetric): void;
    (e: 'changeWeightMetric', data: WeightMetric): void;
}>();

const props = defineProps<{
    userInfo: User;
}>();
const userInfo = ref(props.userInfo);

function submitForm(): void {
    emits('updateUserInfo');
}
</script>
