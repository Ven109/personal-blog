<template>
    <header>
        <address class="flex items-center mb-6 not-italic">
            <div class="inline-flex items-center mr-3 text-gray-900 dark:text-white text-sm">
                <img
                    class="h-16 mr-4 rounded-full w-16"
                    :src="img"
                >
                <div>
                    <a
                        href="#"
                        rel="author"
                        class="font-bold text-gray-900 dark:text-white text-xl"
                    >
                        {{ name }}
                    </a>
                    <p class="text-base dark:text-gray-400 text-gray-500">
                        {{role}}
                    </p>
                    <p class="text-base dark:text-gray-400 text-gray-500">
                        {{ date }}
                    </p>
                </div>
            </div>
        </address>
        <h1 class="font-extrabold leading-tight text-3xl dark:text-white lg:text-4xl text-gray-900">
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
