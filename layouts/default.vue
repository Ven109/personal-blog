<template>
    <div
        class="antialiased bg-white max-w-7xl min-h-screen mx-auto">
        <SpeedInsights />
        <LayoutHeader
            class="mb-2 px-4 py-4 w-full z-10"/>
        <main class="mx-auto px-4 w-full">
            <slot />
        </main>
    </div>
</template>

<script lang="ts" setup>
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>
