<script setup>
import SectionHeader from './SectionHeader.vue'

defineProps({ t: { type: Object, required: true } })
</script>

<template>
  <section id="experience" class="scroll-mt-20 py-20">
    <SectionHeader :title="t.experience.title" />
    <ol class="relative space-y-14 border-l border-neutral-200 pl-8 dark:border-neutral-800">
      <li v-for="job in t.experience.jobs" :key="job.company + job.period" class="relative">
        <span
          class="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400"
          aria-hidden="true"
        ></span>
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <!-- Sur une seule ligne : les espaces autour du « · » dépendent de ce formatage.
               `via` = mandat réalisé par l'intermédiaire d'une société de conseil. -->
          <h3 class="font-semibold tracking-tight">{{ job.role }} <span class="font-normal text-neutral-400 dark:text-neutral-500">·</span> <span class="text-blue-600 dark:text-blue-400">{{ job.company }}</span><span v-if="job.via" class="font-normal text-neutral-400 dark:text-neutral-500"> via {{ job.via }}</span></h3>
          <p class="text-sm text-neutral-400 dark:text-neutral-500">
            {{ job.period }} · {{ job.location }}
          </p>
        </div>
        <ul class="mt-4 space-y-2 text-neutral-600 dark:text-neutral-400">
          <li v-for="(h, i) in job.highlights" :key="i" class="flex gap-3">
            <span class="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-600" aria-hidden="true"></span>
            <span class="leading-relaxed">{{ h }}</span>
          </li>
        </ul>
        <ul v-if="job.tags?.length" class="mt-4 flex flex-wrap gap-2">
          <li
            v-for="tag in job.tags"
            :key="tag"
            class="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500 dark:bg-neutral-800/70 dark:text-neutral-400"
          >
            {{ tag }}
          </li>
        </ul>
      </li>
    </ol>
  </section>
</template>
