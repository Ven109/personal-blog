<template>
    <section
        id="intro">
        <Carousel
            :items-to-show="3"
            :items-to-scroll="3"
            :wrap-around="true"
            :autoplay="5000"
            class="-mx-4">
            <Slide
                v-for="img in images"
                :key="img">
                <div class="h-[500px] w-full">
                    <ImageCard
                        :src=img
                        class="h-full p-4 w-full" />
                </div>
            </Slide>
            <template #addons>
                <Navigation>
                    <template #prev>
                        <Icon
                            name="ri:arrow-left-circle-fill"
                            class="bg-white"/>
                    </template>
                    <template #next>
                        <Icon
                            name="ri:arrow-right-circle-fill"
                            class="bg-white" />
                    </template>
                </Navigation>
                <Pagination />
            </template>
        </Carousel>
    </section>
</template>

<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

defineProps<{
    images: Array<string>,
}>();
</script>

<style scoped>
:deep(.carousel__pagination) {
    margin: 0;
}

:deep(.carousel__prev) {
    margin-left: 32px;
}

:deep(.carousel__next) {
    margin-right: 32px;
}
</style>
