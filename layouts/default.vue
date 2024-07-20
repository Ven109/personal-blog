<template>
    <div
        class="antialiased h-full relative w-full">
        <SpeedInsights />
        <LayoutHeader />
        <main class="min-h-[50vh] my-4 px-24 relative">
            <slot />
        </main>
    </div>
</template>

<script lang="ts" setup>
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>
