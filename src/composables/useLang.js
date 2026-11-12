import { ref, computed } from 'vue'

// Français par défaut ; l'anglais n'est retenu que si la visiteuse ou le visiteur l'a choisi
const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null
const lang = ref(stored === 'en' ? 'en' : 'fr')

export function useLang() {
  const toggleLang = () => {
    lang.value = lang.value === 'fr' ? 'en' : 'fr'
    localStorage.setItem('lang', lang.value)
    document.documentElement.lang = lang.value
  }
  const otherLang = computed(() => (lang.value === 'fr' ? 'EN' : 'FR'))
  return { lang, toggleLang, otherLang }
}
