<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import logoDesjardins from '../assets/logos/desjardins.svg'
import logoBell from '../assets/logos/bell.svg'
import logoDecathlon from '../assets/logos/decathlon.svg'
import logoCgi from '../assets/logos/cgi.svg'

// L'ordre correspond à t.hero.companies (pour les textes alt) ;
// hauteurs ajustées pour un poids visuel homogène.
// `src: null` : pas de logo exploitable en silhouette, le nom est affiché en texte.
const logos = [
  { src: logoDesjardins, h: 'h-7' },
  { src: null },
  { src: logoBell, h: 'h-9' },
  { src: logoDecathlon, h: 'h-6' },
  { src: logoCgi, h: 'h-8' },
]

const props = defineProps({ t: { type: Object, required: true } })

const base = import.meta.env.BASE_URL

const wordIndex = ref(0)
const wordVisible = ref(true)
let timer

onMounted(() => {
  timer = setInterval(() => {
    wordVisible.value = false
    setTimeout(() => {
      wordIndex.value = (wordIndex.value + 1) % props.t.hero.rotator.words.length
      wordVisible.value = true
    }, 350)
  }, 3000)
})
onUnmounted(() => clearInterval(timer))

// Repart du premier mot quand la langue change
watch(
  () => props.t,
  () => {
    wordIndex.value = 0
    wordVisible.value = true
  }
)

const secondaryCta =
  'rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:border-white'
</script>

<template>
  <!-- En-tête typographique, sans photo -->
  <section class="relative border-b border-neutral-200 dark:border-neutral-800">
    <!-- Halo bleu discret, uniquement décoratif -->
    <div
      class="pointer-events-none absolute right-0 top-1/2 hidden h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,#dbeafe,transparent)] md:block dark:bg-[radial-gradient(closest-side,rgba(37,99,235,0.16),transparent)]"
      aria-hidden="true"
    ></div>

    <div class="relative flex min-h-[64vh] max-w-3xl flex-col justify-center py-16 md:min-h-[72vh]">
      <p
        class="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400"
      >
        <span class="h-px w-8 shrink-0 bg-blue-600 dark:bg-blue-400" aria-hidden="true"></span>
        <!-- Si ça passe à la ligne, la coupure se fait au séparateur, pas au milieu du lieu -->
        <span>
          <span class="sm:whitespace-nowrap">{{ t.identity.title }}</span>
          <template v-if="t.identity.location">
            {{ ' ' }}<span class="whitespace-nowrap">· {{ t.identity.location }}</span>
          </template>
        </span>
      </p>
      <h1 class="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
        {{ t.identity.name }}
      </h1>
      <!-- Accroche volontairement discrète : sous le nom, pas en titre -->
      <p class="mt-6 text-lg text-neutral-700 sm:text-xl dark:text-neutral-300">
        {{ t.hero.rotator.prefix }}
        <span
          class="font-serif italic text-blue-600 transition-opacity duration-300 dark:text-blue-400"
          :class="wordVisible ? 'opacity-100' : 'opacity-0'"
        >{{ t.hero.rotator.words[wordIndex] }}</span>
      </p>
      <p class="mt-4 max-w-2xl leading-relaxed text-neutral-500 dark:text-neutral-400">
        {{ t.hero.tagline }}
      </p>
      <div class="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#contact"
          class="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          {{ t.hero.ctaContact }}
        </a>
        <a
          v-if="t.identity.cvFile"
          :href="base + t.identity.cvFile"
          download
          :class="secondaryCta"
        >
          {{ t.hero.ctaDownload }}
        </a>
        <a v-if="t.identity.linkedin" :href="t.identity.linkedin" target="_blank" rel="noopener" :class="secondaryCta">
          LinkedIn
        </a>
        <a v-if="t.identity.github" :href="t.identity.github" target="_blank" rel="noopener" :class="secondaryCta">
          GitHub
        </a>
      </div>
    </div>
  </section>

  <!-- Bandeau des employeurs et clients -->
  <div class="border-b border-neutral-200 py-10 dark:border-neutral-800">
    <p
      class="mb-7 text-center text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500"
    >
      {{ t.hero.companiesLabel }}
    </p>
    <ul class="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
      <li v-for="(company, i) in t.hero.companies" :key="company" class="flex items-center">
        <img
          v-if="logos[i]?.src"
          :src="logos[i].src"
          :alt="company"
          class="w-auto brightness-0 opacity-40 dark:invert dark:opacity-50"
          :class="logos[i].h"
        />
        <span
          v-else
          class="text-2xl font-bold tracking-tight text-black opacity-40 dark:text-white dark:opacity-50"
        >
          {{ company }}
        </span>
      </li>
    </ul>
  </div>
</template>
