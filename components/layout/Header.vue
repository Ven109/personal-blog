<template>
    <div class="flex justify-between items-center">
        <div class="bg-white h-12 rounded-full w-12"/>
        <nav>
            <ul class="flex font-bold gap-6">
                <li
                    v-for="route in routes"
                    :key="route.name"
                >
                    <NuxtLink
                        :to="route.path"
                        class="text-white hover:text-blue-500"
                    >
                        <div class="flex items-center gap-2">
                            <Icon :name="route.icon" />
                            <p>
                                {{ route.name }}
                            </p>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
const routes = [
    {
        name: 'Home',
        path: '/',
        icon: 'ri:home-2-line',
    },
    {
        name: 'Blog',
        path: '/blog',
        icon: 'ri:blogger-line',
    },
    {
        name: 'About',
        path: '/about',
        icon: 'ri:information-line',
    },
];
</script>
