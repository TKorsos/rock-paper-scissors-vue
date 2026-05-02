<template>
  <button
    @click="$emit('openModal')"
    class="px-5 py-2.5 mt-4 text-lg font-semibold rounded-xl 
           bg-red-600 text-white
           ring-1 ring-red-400/60 shadow-red-500/40 shadow-lg
           hover:bg-red-700 active:scale-95 transition-all duration-150
           flex items-center gap-2"
  >
    🔄 <span>Reset</span>
  </button>
</template>
