<script setup>
import SectionHeader from './SectionHeader.vue'

defineProps({ t: { type: Object, required: true } })
</script>

<template>
  <section id="profil" class="scroll-mt-20 py-20">
    <SectionHeader :title="t.profile.title" />
    <div class="grid gap-12 md:grid-cols-[2fr_1fr]">
      <div class="max-w-3xl space-y-5 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
        <p v-for="(p, i) in t.profile.paragraphs" :key="i">{{ p }}</p>
      </div>
      <dl class="flex flex-row flex-wrap gap-4 md:flex-col">
        <div
          v-for="fact in t.profile.facts"
          :key="fact.label"
          class="min-w-36 flex-1 rounded-2xl bg-neutral-100/80 px-6 py-5 md:flex-none dark:bg-neutral-900"
        >
          <dd class="text-3xl font-semibold tracking-tight text-blue-600 dark:text-blue-400">
            {{ fact.value }}
          </dd>
          <dt class="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{{ fact.label }}</dt>
        </div>
      </dl>
    </div>
  </section>
</template>
