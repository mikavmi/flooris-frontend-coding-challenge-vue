<template>
    <div class="flex w-full h-screen justify-center items-center">
        <div class="">
            <TextInput :text="text" />
        </div>
    </div>
</template>

<script setup>
import TextInput from '@/components/TextInput.vue';
import { ref } from 'vue';

const text = ref('');
</script>
