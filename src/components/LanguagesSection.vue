<script setup>
import SectionHeader from './SectionHeader.vue'

defineProps({ t: { type: Object, required: true } })
</script>

<template>
  <section id="langues" class="scroll-mt-20 py-20">
    <SectionHeader :title="t.languages.title" />
    <ul class="flex flex-wrap gap-4">
      <li
        v-for="item in t.languages.items"
        :key="item.name"
        class="rounded-2xl bg-neutral-100/80 px-8 py-5 dark:bg-neutral-900"
      >
        <p class="font-semibold tracking-tight">{{ item.name }}</p>
        <p class="mt-0.5 text-sm text-neutral-500 dark:text-neutral-400">{{ item.level }}</p>
      </li>
    </ul>
  </section>
</template>
