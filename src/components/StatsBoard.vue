<template>
  <div
    class="flex flex-wrap justify-center gap-6 bg-gray-900 text-white p-4 rounded-xl shadow-lg ring-1 ring-purple-500/50 shadow-purple-500/30 mt-4 text-lg"
  >
    <p><strong>Győzelmek:</strong> {{ wins }}</p>
    <p><strong>Vereségek:</strong> {{ losses }}</p>
    <p><strong>Döntetlenek:</strong> {{ draws }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
    wins: Number,
    losses: Number,
    draws: Number
})
</script>