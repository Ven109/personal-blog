<template>
    <NuxtLink
        :key="blog.path"
        :to="blog.path"
    >
        <div
            class="flex flex-col h-full min-h-0 relative w-full"
        >
            <img
                :src="blog.img ? blog.img : '/img/cover.jpg'"
                class="min-h-32 object-cover rounded-2xl w-full z-[5]"
            >
            <div class="border-2 border-[#f4f4f4] grow mt-[-16px] p-4 pt-6 rounded-b-2xl">
                <h5
                    class="font-bold text-2xl tracking-tight"
                >
                    {{ blog.title }}
                </h5>
                <p
                    class="font-normal line-clamp-3"
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
