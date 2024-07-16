<template>
    <div class="mb-2">
        <NuxtImg
            :src="src"
            class="rounded-xl"
        />
        <div class="italic text-sm">
            {{ alt }}
        </div>
    </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
    src: string,
    alt?: string,
}>(), {
    alt: '',
});
</script>
