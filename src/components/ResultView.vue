<template>
  <transition name="fade">
    <div
      v-if="playerChoice"
      class="mt-6 text-lg bg-gray-900 text-white p-5 rounded-xl shadow-lg ring-1 ring-purple-500/50 shadow-purple-500/30 space-y-3"
    >
      <p><strong>Te választottad:</strong> {{ icons[playerChoice] }}</p>

      <p v-if="isThinking" class="italic opacity-70 animate-blink">
        🤖 Gép gondolkodik...
      </p>

      <p v-else>
        <strong>Gép választotta:</strong> {{ icons[computerChoice] }}
      </p>

      <h2
        v-if="!isThinking"
        :class="[
          'text-2xl font-bold mt-3',
          resultClass === 'win' ? 'text-green-400 animate-winGlow' : '',
          resultClass === 'lose' ? 'text-red-400 animate-loseShake' : ''
        ]"
      >
        {{ resultText }}
      </h2>
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    playerChoice: String,
    computerChoice: String,
    resultText: String,
    icons: Object,
    isThinking: Boolean
})

const resultClass = computed(()=> {
    if(props.resultText === "Nyertél!") return "win"
    if(props.resultText === "Vesztettél!") return "lose"
    return ""
})
</script>

<style scoped>
/* Fade animáció */
.fade-enter-active {
  animation: fadeIn 0.4s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>