<template>
    <div class="grid grid-cols-3 gap-4 auto-rows-max auto-cols-max">
        <div v-for="blog in data" :key="blog._path">
            <BlogCard :path="blog._path || ''" :title="blog.title || ''" :description="blog.description" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData('home', () => queryContent('/blog').find());
</script>
