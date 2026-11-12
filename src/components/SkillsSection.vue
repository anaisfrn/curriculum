<script setup>
import SectionHeader from './SectionHeader.vue'

defineProps({ t: { type: Object, required: true } })
</script>

<template>
  <section id="competences" class="scroll-mt-20 py-20">
    <SectionHeader :title="t.skills.title" />
    <div class="grid gap-x-12 gap-y-10 sm:grid-cols-2">
      <div v-for="cat in t.skills.categories" :key="cat.name">
        <h3 class="mb-4 text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          {{ cat.name }}
        </h3>
        <ul class="flex flex-wrap gap-2">
          <li
            v-for="item in cat.items"
            :key="item"
            class="rounded-full bg-neutral-100 px-3.5 py-1.5 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
