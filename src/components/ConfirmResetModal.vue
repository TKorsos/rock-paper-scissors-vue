<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div
      class="bg-gray-900 text-white p-6 rounded-xl shadow-xl
             ring-1 ring-purple-500/50 shadow-purple-500/30
             w-80 animate-fadeIn"
    >
      <h2 class="text-xl font-bold mb-4 text-center">Biztos vagy benne?</h2>

      <p class="text-center mb-6 opacity-80">
        A játék minden pontja és statisztikája törlődik.
      </p>

      <div class="flex justify-between">
        <button
          @click="$emit('cancel')"
          class="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
        >
          Mégse
        </button>

        <button
          @click="$emit('confirm')"
          class="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700
                 ring-1 ring-red-400/60 shadow-red-500/40 shadow-lg transition"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: Boolean
})
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}
.animate-fadeIn {
  animation: fadeIn 0.25s ease;
}
</style>
