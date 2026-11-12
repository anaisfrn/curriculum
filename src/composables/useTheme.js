import { ref } from 'vue'

const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null
const isDark = ref(
  stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
)

function apply() {
  document.documentElement.classList.toggle('dark', isDark.value)
}
apply()

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    apply()
  }
  return { isDark, toggleTheme }
}
