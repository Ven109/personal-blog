<template>
    <div>
        <NuxtImg
            :src="src"
            class="h-full object-cover rounded-xl w-full"/>
        <div
            v-if="alt"
            class="italic text-sm">
            {{ alt }}
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    src: string,
    alt?: string,
}>();
</script>
