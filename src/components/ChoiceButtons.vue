<template>
    <div class="choices">
      <button @click="$emit('choose', 'rock')">🪨 Kő</button>
      <button @click="$emit('choose', 'paper')">📄 Papír</button>
      <button @click="$emit('choose', 'scissors')">✂️ Olló</button>
    </div>
</template>

<style scoped>
.choices button {
  margin: 10px;
  padding: 12px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid #ccc;
  transition: 0.2s;
}
.choices button:hover {
  background: #eee;
}
</style>