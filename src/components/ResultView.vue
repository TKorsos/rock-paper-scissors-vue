<template>
    <transition name="fade">
        <div class="results" v-if="playerChoice">
          <p><strong>Te választottad:</strong> {{ icons[playerChoice] }}</p>

            <p class="thinking" v-if="isThinking">
                🤖 Gép gondolkodik...
            </p>

            <p v-else>
                <strong>Gép választotta:</strong> {{ icons[computerChoice] }}
            </p>

            <h2 :class="resultClass" v-if="!isThinking">{{ resultText }}</h2>
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

/* Nyertél → zöld highlight */
.win {
  animation: glow 0.6s ease;
  color: #2ecc71;
}
@keyframes glow {
  0% { text-shadow: 0 0 0px #2ecc71; }
  100% { text-shadow: 0 0 15px #2ecc71; }
}

/* Vesztettél → piros shake */
.lose {
  animation: shake 0.4s ease;
  color: #e74c3c;
}
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-6px); }
  50% { transform: translateX(6px); }
  75% { transform: translateX(-6px); }
  100% { transform: translateX(0); }
}

.thinking {
  font-style: italic;
  opacity: 0.7;
  animation: blink 1s infinite;
}

@keyframes blink {
  0% { opacity: 0.3; }
  50% { opacity: 1; }
  100% { opacity: 0.3; }
}

.results {
  margin-top: 30px;
  font-size: 20px;
}
</style>