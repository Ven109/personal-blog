
import FeatureTripCard from './FeatureTripCard.vue'<template>
    <div class="text-[#1a1e18]">
        <div class="h-[30vh] md:h-[70vh] relative">
            <div class="absolute inset-x-0 bg-black h-full opacity-50 rounded-2xl w-full z-[5]" />
            <NuxtImg
                src="cover.jpg"
                class="absolute inset-x-0 h-full object-cover rounded-2xl w-full"/>
            <div class="content-center font-bold grid gap-4 md:gap-8 h-full mx-auto pl-4 md:pl-12 relative text-3xl md:text-5xl text-white z-[5]">
                <h6>
                    Entdecke mit uns die Welt.
                </h6>
                <h6>
                    Finde inspirierende Reiseziele.
                </h6>
            </div>
        </div>
        <section
            id="trips"
            class="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-8 my-4 md:my-8">
            <h6 class="font-semibold leading-normal text-3xl">
                Wir möchten Euch die Welt außerhalb der Touristenpfade zeigen.
            </h6>
            <div class="flex flex-col">
                <p class="leading-relaxed">
                    In den letzten Jahren haben wir viele Reisen unternommen und dabei viele Orte entdeckt.
                    Wir haben uns entschieden, unsere Erfahrungen mit Euch zu teilen.
                    Stöbert durch unsere Reiseberichte und lasst Euch inspirieren.
                </p>
                <NuxtLink to="/trips/overview/0">
                    <button class="bg-primary font-bold mt-4 px-4 py-2 rounded-lg text-white">
                        Entdecke alle Reisen
                    </button>
                </NuxtLink>
            </div>
            <h3 class="font-semibold text-3xl md:col-span-2">
                Ausgewählten Reisen
            </h3>
            <template v-if="featureTrips.length === 3">
                <FeatureTripCard
                    :trip="featureTrips[0]"
                    class="h-[350px] md:h-full"/>
                <div class="flex flex-col gap-4">
                    <FeatureTripCard
                        :trip="featureTrips[1]"
                        class="h-[350px]"/>
                    <FeatureTripCard
                        :trip="featureTrips[2]"
                        class="h-[350px]"/>
                </div>
            </template>
        </section>
    </div>
</template>

<script setup lang="ts">
const featureTrips = ref([]);
const {data} = await useAsyncData("featureTrips", () => queryContent('/feature_trips').findOne());
if (data.value) {
    featureTrips.value = data.value.featureTrips;
}

useSeoMeta({
    ogTitle: 'Blog über Reisen und Abenteuer weltweit',
    title: 'Blog über Reisen und Abenteuer weltweit',
    ogDescription: 'Reiseberichte und Abenteuer aus aller Welt. Entdecke mit uns die Welt und finde inspirierende Reiseziele.',
    description: 'Reiseberichte und Abenteuer aus aller Welt. Entdecke mit uns die Welt und finde inspirierende Reiseziele.',
});
</script>
