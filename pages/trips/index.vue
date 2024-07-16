<template>
    <div>
        <div
            class="auto-cols-max grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4"
        >
            <ContentList
                v-slot="{ list }"
                :query="query"
            >
                <div
                    v-for="trip in list"
                    :key="trip._path"
                >
                    <BlogCard
                        :path="trip._path || ''"
                        :title="trip.title || ''"
                        :description="trip.description"
                        :img="trip.img"
                    />
                </div>
            </contentlist></div>
    </div>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content';

const query: QueryBuilderParams = { path: '/trips', limit: 12, sort: [{ date: -1 }] };
</script>
