<template>
    <button class="reset-btn" @click="$emit('reset')">
        🔄 Reset
    </button>
</template>

<style scoped>
.reset-btn {
  margin-top: 25px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid #888;
  background: #f5f5f5;
  transition: 0.2s;
}

.reset-btn:hover {
  background: #ddd;
}
</style>