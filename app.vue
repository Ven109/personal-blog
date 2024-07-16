<!-- eslint-disable vue/enforce-style-attribute -->
<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
useHead({
    htmlAttrs: {
        class: 'scroll-smooth',
    },
});
</script>
