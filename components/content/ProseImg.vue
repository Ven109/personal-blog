<template>
    <div>
        <img
            :src="src"
            class="h-full object-cover w-full"
        >
    </div>
</template>

<script lang="ts" setup>
defineProps<{
  src: string,
}>();
</script>
