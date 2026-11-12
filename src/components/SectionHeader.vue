<script setup>
defineProps({ title: { type: String, required: true } })
</script>

<template>
  <h2 class="mb-10 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
    {{ title }}
  </h2>
</template>
