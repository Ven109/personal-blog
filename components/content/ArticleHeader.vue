<template>
    <header>
        <address class="mb-6 flex items-center not-italic">
            <div class="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
                <img
                    class="mr-4 h-16 w-16 rounded-full" :src="img">
                <div>
                    <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">
                        {{ name }}
                    </a>
                    <p class="text-base text-gray-500 dark:text-gray-400">
                        {{role}}
                    </p>
                    <p class="text-base text-gray-500 dark:text-gray-400">
                        {{ date }}
                    </p>
                </div>
            </div>
        </address>
        <h1 class="text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl dark:text-white">
            {{ title }}
        </h1>
    </header>
</template>

<script lang="ts" setup>
interface Author {
  name: string,
  role: string,
  img: string,
  date: string,
  title: string,
}

defineProps<Author>();
</script>
