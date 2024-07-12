<template>
    <div>
        <button @click="fetchContent('tech')">
            Tech
        </button>
        <button @click="reset">
            Reset
        </button>
        <div class="auto-cols-max auto-rows-max grid grid-cols-3 gap-4">
            <div
                v-for="blog in blogs"
                :key="blog._path"
            >
                <BlogCard
                    :path="blog._path || ''"
                    :title="blog.title || ''"
                    :description="blog.description"
                    :img="blog.img"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const blogs = ref();

const { data } = await useAsyncData('home', () => queryContent('/blog').find());

blogs.value = data.value;

async function fetchContent(tag: string) {
    blogs.value = await queryContent('/blog')
        .where({'tags': { $contains: tag}})
        .find();
}

async function reset() {
    blogs.value = await queryContent('/blog').find();
}
</script>
