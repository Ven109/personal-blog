<template>
    <div>
        {{title}}
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: 'Hello World',
    },
});
</script>
