<template>
    <main
        class="min-h-screen bg-white  text-white antialiased py-8 dark:bg-gray-900">
        <div class="mx-auto flex flex-col max-w-screen-xl px-4">
            <LayoutHeader class="pb-8 max-w-5xl mx-auto  w-full"/>
            <div class="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert mx-auto w-full max-w-4xl flex flex-col gap-4">
                <slot />
            </div>
        </div>
    </main>
</template>
