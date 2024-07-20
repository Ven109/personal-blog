<template>
    <div class="flex flex-col gap-8">
        <IndexIntro
            v-if="data && data.intro"
            :images="data.intro"
            class="-mt-4" />
        <section
            id="trips"
            class="grid grid-cols-2 gap-8">
            <h6 class="font-semibold leading-normal text-3xl">
                Wir möchten Euch die Welt außerhalb der Touristenpfade zeigen.
            </h6>
            <div class="flex flex-col">
                <p class="leading-relaxed">
                    In den letzten Jahren haben wir viele Reisen unternommen und dabei
                    viele Orte entdeckt. Wir haben uns entschieden, unsere Erfahrungen mit
                    Euch zu teilen. Stöbert durch unsere Reiseberichte und lasst Euch
                    inspirieren.
                </p>
                <NuxtLink to="/trips/overview/0">
                    <button
                        class="bg-primary font-bold mt-4 px-4 py-2 rounded-lg text-white">
                        Entdecke alle Reisen
                    </button>
                </NuxtLink>
            </div>
        </section>
        <section
            id="feature-trips"
            class="grid grid-cols-2 gap-8">
            <h3 class="font-semibold text-3xl md:col-span-2">
                Ausgewählten Reisen
            </h3>
            <template v-if="data?.featureTrips">
                <FeatureTripCard
                    :trip="data.featureTrips[0]"
                    class="h-[500px] md:h-full" />
                <div class="flex flex-col gap-4">
                    <FeatureTripCard
                        :trip="data.featureTrips[1]"
                        class="h-[350px]" />
                    <FeatureTripCard
                        :trip="data.featureTrips[2]"
                        class="h-[350px]" />
                </div>
            </template>
        </section>
    </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";

interface IndexContent extends ParsedContent {
  navigation: string,
  intro: Array<string>,
  featureTrips: Array<{
    img: string,
    title: string,
    tags: Array<string>,
    link: string,
  }>,
}

const { data } = await useAsyncData("index", () =>
    queryContent<IndexContent>("/").findOne(),
);

useSeoMeta({
    ogTitle: "Blog über Reisen und Abenteuer weltweit",
    title: "Blog über Reisen und Abenteuer weltweit",
    ogDescription:
    "Reiseberichte und Abenteuer aus aller Welt. Entdecke mit uns die Welt und finde inspirierende Reiseziele.",
    description:
    "Reiseberichte und Abenteuer aus aller Welt. Entdecke mit uns die Welt und finde inspirierende Reiseziele.",
});
</script>
