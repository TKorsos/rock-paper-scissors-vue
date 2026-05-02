<template>
  <div class="flex justify-between bg-gray-900 text-white p-4 rounded-xl shadow-lg text-lg ring-1 ring-purple-500/50 shadow-purple-500/30">
    <p><strong>Te:</strong> {{ playerScore }}</p>
    <p><strong>Gép:</strong> {{ computerScore }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
    playerScore: Number,
    computerScore: Number
})
</script>