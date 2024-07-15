<template>
    <NuxtLink
        :to="trip.link"
        class="flex flex-col rounded-lg"
    >
        <img
            :src="trip.img"
            class="h-full min-h-0 object-cover rounded-2xl w-full z-[5]"
        >
        <div
            class="border-2 border-[#f4f4f4] flex content-center flex-col flex-initial gap-4 mt-[-20px] pb-4 pt-8 px-4 rounded-b-2xl"
        >
            <h3 class="font-semibold text-2xl">
                {{trip.title}}
            </h3>
            <div class="flex justify-between items-center flex-row gap-8 text-xs">
                <div class="flex flex-row flex-wrap gap-1">
                    <div
                        v-for="tag in trip.tags"
                        :key="tag"
                        class="bg-[#f4f4f4] p-2 rounded-lg"
                    >
                        {{ tag }}
                    </div>
                </div>
                <Icon
                    name="ri:arrow-right-circle-line"
                    class="h-8 text-black w-8"
                />
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
	trip: {
		img: string,
		title: string,
		tags: string[],
		link: string,
	},
}>();
</script>
