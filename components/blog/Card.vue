<template>
    <NuxtLink :to="blog.path">
        <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ blog.title }}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ blog.description }}</p>
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>

const blog = defineProps<
    {
        path: string,
        title: string,
        description: string,
    }
>();

</script>
