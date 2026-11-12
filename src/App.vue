<script setup>
import { computed } from 'vue'
import { useLang } from './composables/useLang'
import { cv } from './data/cv'

import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ProfileSection from './components/ProfileSection.vue'
import ExpertiseSection from './components/ExpertiseSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import LanguagesSection from './components/LanguagesSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

const { lang } = useLang()
const t = computed(() => cv[lang.value])
</script>

<template>
  <div class="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
    <SiteHeader :t="t" />
    <main class="mx-auto max-w-5xl px-6">
      <HeroSection :t="t" />
      <ProfileSection :t="t" />
      <ExpertiseSection :t="t" />
      <SkillsSection :t="t" />
      <ExperienceSection :t="t" />
      <ProjectsSection :t="t" />
      <EducationSection :t="t" />
      <LanguagesSection :t="t" />
      <ContactSection :t="t" />
    </main>
    <SiteFooter :t="t" />
  </div>
</template>
