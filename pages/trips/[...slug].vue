<template>
    <div class="max-w-3xl mx-auto">
        <!-- <ul class="ml-0 pl-4">
            <li
                v-for="{ id, text, children } in tocLinks"
                :id="`toc-${id}`"
                :key="id"
                class="cursor-pointer list-none mb-2 last:mb-0 ml-0 text-sm"
            >
                {{ text }}
                <ul
                    v-if="children"
                    class="ml-3 my-2"
                >
                    <li
                        v-for="{ id: childId, text: childText } in children"
                        :id="`toc-${childId}`"
                        :key="childId"
                        class="cursor-pointer list-none mb-2 last:mb-0 ml-0 text-xs"
                    >
                        {{ childText }}
                    </li>
                </ul>
            </li>
        </ul> -->
        <ContentDoc
            tag="article"
            class="flex flex-col gap-2 mb-8" />
        <div
            class="flex items-center font-bold mb-8"
            :class="[prev ? 'justify-between' : 'justify-end']">
            <NuxtLink
                v-if="prev"
                :to="prev._path"
                class="flex">
                <Icon
                    name="ri:arrow-left-circle-fill"
                    class="bg-primary h-8 w-8" />
            </NuxtLink>
            <NuxtLink
                v-if="next"
                :to="next._path"
                class="flex">
                <Icon
                    name="ri:arrow-right-circle-fill"
                    class="bg-primary h-8 w-8" />
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
const path = ref(useRoute().path);

const { data: page } = await useAsyncData(
    path.value,
    async () => await queryContent(path.value).only(["trip"]).findOne(),
    { watch: [path] },
);

const { data: surround } = await useAsyncData(
    `${path.value}-surround`,
    async () =>
        await queryContent()
            .where({ _extension: 'md', navigation: { $ne: false }, trip: page.value!.trip })
            .sort({ date: 1 })
            .findSurround(path.value),
    {
        watch: [path],
        default: () => [],
    },
);

const prev = computed(() =>
    surround.value && surround.value.length === 2 ? surround.value[0] : null,
);

const next = computed(() =>
    surround.value && surround.value.length === 2 ? surround.value[1] : null,
);
</script>
