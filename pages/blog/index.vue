<template>
    <div class="grid grid-cols-3 gap-4 auto-rows-max auto-cols-max">
        <ClientOnly>
            <ContentList v-slot="{ list }" :query="query">
                <div v-for="blog in list" :key="blog._path">
                    <BlogCard :path="blog._path || ''" :title="blog.title || ''" :description="blog.description" />
                </div>
            </ContentList>
        </ClientOnly>
    </div>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content';

const query: QueryBuilderParams = { path: '/blog', sort: [{ date: -1 }] };
</script>
