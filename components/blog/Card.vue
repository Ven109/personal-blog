<template>
    <NuxtLink
        :key="blog.path"
        :to="blog.path"
    >
        <div
            class="bg-white dark:bg-gray-800 border dark:border-gray-700 border-gray-200 h-full rounded-lg shadow w-full"
        >
            <img
                v-if="blog.img"
                :src="blog.img"
                class="h-40 object-cover rounded-t-lg w-full"
            >
            <img
                v-else
                src="/img/default.jpg"
                class="h-40 object-cover rounded-t-lg w-full"
            >
            <div class="p-6">
                <h5
                    class="font-bold mb-2 text-2xl dark:text-white text-gray-900 tracking-tight"
                >
                    {{ blog.title }}
                </h5>
                <p
                    class="font-normal line-clamp-2 mb-3 text-gray-700 dark:text-gray-400"
                >
                    {{ blog.description }}
                </p>
            </div>
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>

const blog = defineProps<
    {
        path: string,
        title: string,
        description: string,
        img?: string,
    }
>();

</script>
