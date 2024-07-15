<template>
    <div>
        <!-- <button @click="fetchContent('tech')">
            Tech
        </button>
        <button @click="reset">
            Reset
        </button> -->
        <div class="auto-cols-max grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4">
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

const { data } = await useAsyncData('trips', () => queryContent('/trips').find());

blogs.value = data.value;

// async function fetchContent(tag: string) {
//     blogs.value = await queryContent('/trips')
//         .where({'tags': { $contains: tag}})
//         .find();
// }

// async function reset() {
//     blogs.value = await queryContent('/trips').find();
// }
</script>
