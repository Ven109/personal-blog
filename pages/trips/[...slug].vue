<template>
    <div class="max-w-3xl mx-auto">
        <!-- <ul class="ml-0 pl-4">
            <li
                v-for="{ id, text, children } in tocLinks"
                :id="`toc-${id}`"
                :key="id"
                class="cursor-pointer list-none mb-2 last:mb-0 ml-0 text-sm"
            >
                {{ text }}
                <ul
                    v-if="children"
                    class="ml-3 my-2"
                >
                    <li
                        v-for="{ id: childId, text: childText } in children"
                        :id="`toc-${childId}`"
                        :key="childId"
                        class="cursor-pointer list-none mb-2 last:mb-0 ml-0 text-xs"
                    >
                        {{ childText }}
                    </li>
                </ul>
            </li>
        </ul> -->
        <ContentDoc
            tag="article"
            class="flex flex-col gap-2 mb-8"
        />
    </div>
</template>
