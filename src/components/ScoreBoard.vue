<template>
    <div class="scoreboard">
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

<style scoped>
.scoreboard {
  display: flex;
  justify-content: center;
  gap: 40px;
  font-size: 20px;
  margin-bottom: 20px;
}
</style>