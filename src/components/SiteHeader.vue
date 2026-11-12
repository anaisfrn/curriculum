<script setup>
import { useLang } from '../composables/useLang'
import { useTheme } from '../composables/useTheme'

defineProps({ t: { type: Object, required: true } })

const { toggleLang, otherLang } = useLang()
const { isDark, toggleTheme } = useTheme()

const anchors = [
  ['profile', '#profil'],
  ['expertise', '#expertise'],
  ['skills', '#competences'],
  ['experience', '#experience'],
  ['projects', '#realisations'],
  ['education', '#formation'],
  ['contact', '#contact'],
]
</script>

<template>
  <header
    class="sticky top-0 z-10 border-b border-neutral-200/60 bg-white/70 backdrop-blur-xl dark:border-neutral-800/60 dark:bg-neutral-950/70"
  >
    <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
      <a href="#" class="text-sm font-semibold tracking-tight">{{ t.identity.name }}</a>
      <nav class="hidden items-center gap-6 text-sm md:flex">
        <a
          v-for="[key, href] in anchors"
          :key="key"
          :href="href"
          class="text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          {{ t.nav[key] }}
        </a>
      </nav>
      <div class="flex items-center gap-2">
        <button
          @click="toggleLang"
          class="rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
          :aria-label="`Switch language to ${otherLang}`"
        >
          {{ otherLang }}
        </button>
        <button
          @click="toggleTheme"
          class="rounded-full bg-neutral-100 px-3 py-1.5 text-xs text-neutral-600 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
          aria-label="Toggle theme"
        >
          {{ isDark ? '☀️' : '🌙' }}
        </button>
        <a
          href="#contact"
          class="hidden rounded-full bg-neutral-900 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-neutral-700 sm:block dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          {{ t.hero.ctaContact }}
        </a>
      </div>
    </div>
  </header>
</template>
