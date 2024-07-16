<template>
    <header
        class="grid grid-cols-3 gap-4 items-center"
    >
        <div
            class="bg-black h-12 rounded-full w-12"
        />
        <nav class="col-span-2 md:col-span-1 justify-self-end md:justify-self-center">
            <ul class="flex font-bold gap-6">
                <li
                    v-for="route in routes"
                    :key="route.name"
                >
                    <a
                        :href="route.path"
                    >
                        <div class="flex items-center gap-2">
                            <p>
                                {{ route.name }}
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
const routes = [
    {
        name: 'Home',
        path: '/',
        icon: 'ri:home-2-line',
    },
    {
        name: 'Reisen',
        path: '/trips',
        icon: 'ri:blogger-line',
    },
    {
        name: 'Über Uns',
        path: '/about',
        icon: 'ri:information-line',
    },
];
</script>
