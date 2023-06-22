<template>
    <input type="text" class="border border-gray-300 w-full" :value="text" />
</template>

<script setup>
defineProps({
    text: { type: String, required: true },
});
</script>
