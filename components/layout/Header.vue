<template>
    <div class="flex justify-between items-center">
        <div class="rounded-full bg-white w-12 h-12"/>
        <nav>
            <ul class="flex gap-4">
                <li>
                    <NuxtLink
                        to="/"
                        class="text-white hover:text-blue-500">
                        Home
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        to="/blog"
                        class="text-white hover:text-blue-500">
                        Blog
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        to="/about"
                        class="text-white hover:text-blue-500">
                        About
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>
