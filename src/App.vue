<template>
  <div class="game">
    <h1>Kő-Papír-Olló</h1>

    <!-- Pontszámláló -->
    <ScoreBoard
      :playerScore="playerScore"
      :computerScore="computerScore"
    />

    <!-- Statisztika -->
    <StatsBoard
      :wins="wins"
      :losses="losses"
      :draws="draws"
    />

    <!-- Reset gomb -->
    <ResetButton @reset="resetGame" />

    <!-- Választó gombok -->
    <ChoiceButtons @choose="play" />

    <!-- Eredmény kijelzése -->
    <ResultView 
      :playerChoice="playerChoice"
      :computerChoice="computerChoice"
      :resultText="resultText"
      :icons="icons"
      :isThinking="isThinking"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ChoiceButtons from './components/ChoiceButtons.vue'
import ResultView from './components/ResultView.vue'
import ScoreBoard from './components/ScoreBoard.vue'
import StatsBoard from './components/StatsBoard.vue'
import ResetButton from './components/ResetButton.vue'

const playerChoice = ref(null)
const computerChoice = ref(null)

const playerScore = ref(0)
const computerScore = ref(0)

const wins = ref(0)
const losses = ref(0)
const draws = ref(0)

const isThinking = ref(false)

const STORAGE_KEY = "rps-game-data"

const icons = {
  rock: "🪨 Kő",
  paper: "📄 Papír",
  scissors: "✂️ Olló"
}

function play(choice) {
  playerChoice.value = choice
  computerChoice.value = null
  isThinking.value = true

  setTimeout(()=> {
    const options = ["rock", "paper", "scissors"]
    computerChoice.value = options[Math.floor(Math.random() * 3)]
    isThinking.value = false

    // Döntetlen
    if(playerChoice.value === computerChoice.value) {
      draws.value++
      saveGame()
      return
    }

    const playerWins = 
      (playerChoice.value === "rock" && computerChoice.value === "scissors") ||
      (playerChoice.value === "paper" && computerChoice.value === "rock") ||
      (playerChoice.value === "scissors" && computerChoice.value === "paper")

    if(playerWins) {
      playerScore.value++
      wins.value++
    } else {
      computerScore.value++
      losses.value++
    }

    saveGame()
  }, 1000)
}

const resultText = computed(() => {
  if (!playerChoice.value || !computerChoice.value) return ""

  if (playerChoice.value === computerChoice.value) {
    return "Döntetlen!"
  }

  const win =
    (playerChoice.value === "rock" && computerChoice.value === "scissors") ||
    (playerChoice.value === "paper" && computerChoice.value === "rock") ||
    (playerChoice.value === "scissors" && computerChoice.value === "paper")

  return win ? "Nyertél!" : "Vesztettél!"
})

function saveGame() {
  const data = {
    playerScore: playerScore.value,
    computerScore: computerScore.value,
    wins: wins.value,
    losses: losses.value,
    draws: draws.value,
    playerChoice: playerChoice.value,
    computerChoice: computerChoice.value
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

function loadGame() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if(!saved) return

  const data = JSON.parse(saved)

  playerScore.value = data.playerScore
  computerScore.value = data.computerScore
  wins.value = data.wins
  losses.value = data.losses
  draws.value = data.draws
  playerChoice.value = data.playerChoice
  computerChoice.value = data.computerChoice
}

onMounted(()=> {
  loadGame()
})

function resetGame() {
  playerChoice.value = null
  computerChoice.value = null

  playerScore.value = 0
  computerScore.value = 0

  wins.value = 0
  losses.value = 0
  draws.value = 0

  localStorage.removeItem(STORAGE_KEY)
}
</script>

<style scoped>
.game {
  text-align: center;
  margin-top: 40px;
  font-family: Arial, sans-serif;
}
</style>