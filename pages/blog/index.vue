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

function fetchContent(tag: string) {
    blogs.value = data.value?.filter((blog: any) => {
        if (!('tags' in blog)) {
            return false;
        }
        return blog.tags.includes(tag);
    });
}

function reset() {
    blogs.value = data.value;
}
</script>
