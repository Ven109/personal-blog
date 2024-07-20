<template>
    <div>
        <p v-if="contentIsEmpty">
            Content is empty
        </p>
        <div v-else>
            <div
                class="auto-cols-max grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 mb-8">
                <div
                    v-for="trip in trips"
                    :key="trip._path">
                    <BlogCard
                        :path="trip._path || ''"
                        :title="trip.title || ''"
                        :description="trip.description"
                        :img="trip.img"/>
                </div>
            </div>
            <div
                class="flex font-bold mb-8"
                :class="[currentPage === 0 ? 'justify-end' : 'justify-between']">
                <NuxtLink
                    v-if="currentPage > 0"
                    :to="prevPage"
                    class="flex">
                    <Icon
                        name="ri:arrow-left-circle-fill"
                        class="bg-primary h-8 w-8" />
                </NuxtLink>
                <NuxtLink
                    v-if="currentPage < pages - 1"
                    :to="nextPage"
                    class="flex">
                    <Icon
                        name="ri:arrow-right-circle-fill"
                        class="bg-primary h-8 w-8" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { totalPages } from "~/utils/pagination";

definePageMeta({
    validate: async (route) => {
        return typeof route.params.id === "string" && /^\d+$/.test(route.params.id);
    },
});

const { data: count } = await useAsyncData("count", () =>
    queryContent("/trips").count(),
);

const { id } = useRoute().params;

const currentPage = ref(0);
const itemsPerPage = 6;

currentPage.value = parseInt(id as string);

const pages = totalPages(count.value ? count.value : 0, itemsPerPage);

const prevPage = computed(() => `/trips/overview/${currentPage.value - 1}`);
const nextPage = computed(() => `/trips/overview/${currentPage.value + 1}`);

const { data: trips } = await useAsyncData(
    `trips-${currentPage.value}`,
    async () =>
        await queryContent("/trips")
            .skip(currentPage.value * itemsPerPage)
            .limit(itemsPerPage)
            .find(),
    { watch: [currentPage] },
);

const contentIsEmpty = computed(() => !trips.value || trips.value.length === 0);
</script>
