<template>
    <div
        class="flex font-bold mb-8"
        :class="[!showPrev ? 'justify-end' : 'justify-between' ]">
        <NuxtLink
            v-if="showPrev"
            :to="prevPage"
            class="flex">
            <Icon
                name="ri:arrow-left-circle-fill"
                class="bg-primary h-8 w-8"/>
        </NuxtLink>
        <NuxtLink
            v-if="showNext"
            :to="nextPage"
            class="flex">
            <Icon
                name="ri:arrow-right-circle-fill"
                class="bg-primary h-8 w-8" />
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    numberOfPages?: number,
    currentPage?: number,
    pages?: Array<string | null>,
    linkGen?: Function,
}>();

const showPrev = computed(() => {
    return props.currentPage != null && props.numberOfPages != null && props.currentPage > 0 && props.currentPage < props.numberOfPages ||
  props.pages && props.pages.length === 2 && props.pages[0];
});

const showNext = computed(() => {
    return props.currentPage != null && props.numberOfPages != null && props.currentPage < props.numberOfPages - 1 ||
  props.pages && props.pages.length === 2 && props.pages[1];
});

const prevPage = computed(() => {
    if (props.currentPage != null && props.linkGen) return props.linkGen(props.currentPage - 1);
    if (props.pages) return props.pages[0];
    return 0;
});

const nextPage = computed(() => {
    if (props.currentPage != null && props.linkGen) return props.linkGen(props.currentPage+1);
    if (props.pages) return props.pages[1];
    return 0;
});
</script>
