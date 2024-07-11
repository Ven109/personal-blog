<template>
    <div class="grid grid-cols-3 gap-4 auto-rows-max auto-cols-max">
        <ContentList :query="query">
            <template #default="{ list }">
                <div v-for="blog in list" :key="blog._path">
                    <BlogCard :path="blog._path || ''" :title="blog.title || ''" :description="blog.description" />
                </div>
            </template>
            <template #not-found>
                <p>No articles found.</p>
            </template>
        </ContentList>
    </div>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content';

const query: QueryBuilderParams = { path: '/blog', sort: [{ date: -1 }] };
</script>
