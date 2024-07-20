<template>
    <header class="h-full main-menu overflow-hidden">
        <div class="bg-white main-menu px-24 relative z-[9999]">
            <div
                class="flex justify-between items-center flex-nowrap m-auto max-w-none py-6 relative">
                <div class="flex gap-4">
                    <Icon
                        name="ri:instagram-line"
                        class="h-4 w-4" />
                    <Icon
                        name="ri:facebook-circle-line"
                        class="h-4 w-4" />
                    <Icon
                        name="ri:twitter-x-line"
                        class="h-4 w-4" />
                    <Icon
                        name="ri:youtube-line"
                        class="h-4 w-4" />
                </div>
                <div class="absolute flex justify-center items-center h-full w-full">
                    <div class="bg-black h-8 rounded-full w-8" />
                </div>
                <div class="flex gap-6">
                    <Icon
                        name="ri:search-2-line"
                        class="h-6 w-6" />
                    <Icon
                        name="ri:sun-line"
                        class="h-6 w-6" />
                    <Icon
                        name="ri:menu-4-fill"
                        class="h-6 w-6" />
                </div>
            </div>
            <nav class="flex justify-center justify-self-end main-navigation relative">
                <ul class="flex font-light gap-8 py-6">
                    <li
                        v-for="route in routes"
                        :key="route.name">
                        <a :href="route.path">
                            <div class="flex items-center gap-2">
                                <p>
                                    {{ route.name }}
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
const routes = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Erkunden",
        path: "/trips/overview/0",
    },
    {
        name: "Reisen",
        path: "/trips/overview/0",
        icon: "ri:blogger-line",
    },
    {
        name: "Über Uns",
        path: "/about",
    },
    {
        name: "Kontakt",
        path: "/about",
    },
];
</script>

<style scoped>
.main-menu {
    box-shadow: 0 1px 0 0 rgb(18, 23, 26, 0.1);
}

@media (min-width: 1024px) {
  .main-navigation::before {
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 0%,
      rgba(18, 23, 26, 0.05) 15%,
      rgba(18, 23, 26, 0.1) 50%,
      rgba(18, 23, 26, 0.05) 85%,
      rgba(0, 0, 0, 0) 100%
    );
    content: " ";
    height: 1px;
    left: calc(6rem * -1);
    position: absolute;
    right: calc(6rem * -1);
  }
}
</style>
