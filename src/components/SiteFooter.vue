<script setup>
defineProps({ t: { type: Object, required: true } })

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-neutral-200/60 py-10 text-center text-sm text-neutral-400 dark:border-neutral-800/60 dark:text-neutral-500">
    © {{ year }} {{ t.identity.name }} — {{ t.footer.note }}
  </footer>
</template>
