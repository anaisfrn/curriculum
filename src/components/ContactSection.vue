<script setup>
import SectionHeader from './SectionHeader.vue'

defineProps({ t: { type: Object, required: true } })
</script>

<template>
  <section id="contact" class="scroll-mt-20 py-20">
    <SectionHeader :title="t.contact.title" />
    <p class="mb-12 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
      {{ t.contact.subtitle }}
    </p>
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <p class="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          {{ t.contact.email }}
        </p>
        <a
          :href="`mailto:${t.identity.email}`"
          class="mt-2 inline-block text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400"
        >
          {{ t.identity.email }}
        </a>
      </div>
      <div v-if="t.identity.phone">
        <p class="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          {{ t.contact.phone }}
        </p>
        <a
          :href="`tel:${t.identity.phone.replace(/\s/g, '')}`"
          class="mt-2 inline-block text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400"
        >
          {{ t.identity.phone }}
        </a>
      </div>
      <div v-if="t.identity.location">
        <p class="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          {{ t.contact.location }}
        </p>
        <p class="mt-2 text-neutral-600 dark:text-neutral-300">{{ t.identity.location }}</p>
      </div>
      <div v-if="t.identity.linkedin">
        <p class="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          LinkedIn
        </p>
        <a
          :href="t.identity.linkedin"
          target="_blank"
          rel="noopener"
          class="mt-2 inline-block text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400"
        >
          {{ t.identity.linkedinLabel }}
        </a>
      </div>
      <div v-if="t.identity.github">
        <p class="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          GitHub
        </p>
        <a
          :href="t.identity.github"
          target="_blank"
          rel="noopener"
          class="mt-2 inline-block text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400"
        >
          {{ t.identity.github.replace('https://', '') }}
        </a>
      </div>
    </div>
  </section>
</template>
