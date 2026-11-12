<script setup>
import SectionHeader from './SectionHeader.vue'

defineProps({ t: { type: Object, required: true } })
</script>

<template>
  <section id="formation" class="scroll-mt-20 py-20">
    <SectionHeader :title="t.education.title" />
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="item in t.education.items"
        :key="item.name"
        class="rounded-2xl bg-neutral-100/80 p-8 dark:bg-neutral-900"
      >
        <p v-if="item.period" class="mb-2 text-sm text-neutral-400 dark:text-neutral-500">{{ item.period }}</p>
        <h3 class="font-semibold tracking-tight">{{ item.name }}</h3>
        <p v-if="item.org" class="mt-1 text-sm text-blue-600 dark:text-blue-400">{{ item.org }}</p>
        <p v-if="item.description" class="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>
