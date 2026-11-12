<script setup>
import SectionHeader from './SectionHeader.vue'

defineProps({ t: { type: Object, required: true } })
</script>

<template>
  <section id="expertise" class="scroll-mt-20 py-20">
    <SectionHeader :title="t.expertise.title" />
    <div class="grid gap-4 sm:grid-cols-2">
      <div
        v-for="item in t.expertise.items"
        :key="item.name"
        class="rounded-2xl bg-neutral-100/80 p-8 transition-colors hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
      >
        <h3 class="mb-2 text-lg font-semibold tracking-tight">{{ item.name }}</h3>
        <p class="leading-relaxed text-neutral-600 dark:text-neutral-400">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>
