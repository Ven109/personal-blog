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
            <SimpleNav
                :current-page="currentPage"
                :number-of-pages="pages"
                :link-gen />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { totalPages } from '~/utils/pagination';

definePageMeta({
    validate: async (route) => {
        return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id);
    },
});

const { data: count } = await useAsyncData('count', () => queryContent('/trips').count());
const { id } = useRoute().params;

const currentPage = ref(0);
const itemsPerPage = 6;

currentPage.value = parseInt(id as string);

const pages = totalPages(count.value? count.value : 0 , itemsPerPage);

const linkGen = (pageNum: number) => {
    return {
        name: 'trips-overview-id',
        params: { id: pageNum },
    };
};

const { data: trips } = await useAsyncData(`trips-${currentPage.value}`,
    async () => await queryContent('/trips')
        .skip(currentPage.value*itemsPerPage)
        .limit(itemsPerPage)
        .find(),
    { watch: [currentPage]},
);

const contentIsEmpty = computed(() => !trips.value || trips.value.length === 0);
</script>
