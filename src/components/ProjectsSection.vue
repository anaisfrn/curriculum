<script setup>
import SectionHeader from './SectionHeader.vue'

defineProps({ t: { type: Object, required: true } })
</script>

<template>
  <section id="realisations" class="scroll-mt-20 py-20">
    <SectionHeader :title="t.projects.title" />
    <div class="grid gap-4 sm:grid-cols-2">
      <div
        v-for="item in t.projects.items"
        :key="item.name"
        class="flex flex-col rounded-2xl bg-neutral-100/80 p-8 transition-colors hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
      >
        <p class="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          {{ item.context }}
        </p>
        <h3 class="mt-3 text-lg font-semibold tracking-tight">{{ item.name }}</h3>
        <p class="mt-2 flex-1 leading-relaxed text-neutral-600 dark:text-neutral-400">
          {{ item.description }}
        </p>
        <ul class="mt-5 flex flex-wrap gap-2">
          <li
            v-for="tag in item.tags"
            :key="tag"
            class="rounded-full bg-white px-3 py-1 text-xs text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
          >
            {{ tag }}
          </li>
        </ul>
      </div>
    </div>

    <h3
      v-if="t.projects.sideItems?.length"
      class="mb-6 mt-14 text-xl font-semibold tracking-tight text-neutral-900 dark:text-white"
    >
      {{ t.projects.sideTitle }}
    </h3>
    <div v-if="t.projects.sideItems?.length" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <component
        :is="item.link ? 'a' : 'div'"
        v-for="item in t.projects.sideItems"
        :key="item.name"
        :href="item.link || undefined"
        :target="item.link ? '_blank' : undefined"
        :rel="item.link ? 'noopener' : undefined"
        class="group flex flex-col rounded-2xl bg-neutral-100/80 p-8 transition-colors hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
      >
        <p class="flex items-baseline justify-between text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          {{ item.context }}
          <span
            v-if="item.link"
            class="text-neutral-400 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"
            aria-hidden="true"
          >↗</span>
        </p>
        <h3 class="mt-3 text-lg font-semibold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {{ item.name }}
        </h3>
        <p class="mt-2 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {{ item.description }}
        </p>
        <ul class="mt-5 flex flex-wrap gap-2">
          <li
            v-for="tag in item.tags"
            :key="tag"
            class="rounded-full bg-white px-3 py-1 text-xs text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
          >
            {{ tag }}
          </li>
        </ul>
      </component>
    </div>
  </section>
</template>
