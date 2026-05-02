<template>
    <div class="stats">
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

<style scoped>
.stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  font-size: 18px;
  margin-top: 20px;
}
</style>