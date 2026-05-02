<template>
  <div class="flex flex-wrap justify-center gap-4 mt-4">

    <button
      @click="$emit('choose', 'rock')"
      class="px-6 py-3 bg-gray-900 text-white rounded-xl text-lg shadow-lg
             ring-1 ring-purple-500/50 shadow-purple-500/30
             hover:bg-gray-800 active:scale-95 transition-all duration-150
             flex items-center gap-2"
    >
      🪨 <span>Kő</span>
    </button>

    <button
      @click="$emit('choose', 'paper')"
      class="px-6 py-3 bg-gray-900 text-white rounded-xl text-lg shadow-lg
             ring-1 ring-purple-500/50 shadow-purple-500/30
             hover:bg-gray-800 active:scale-95 transition-all duration-150
             flex items-center gap-2"
    >
      📄 <span>Papír</span>
    </button>

    <button
      @click="$emit('choose', 'scissors')"
      class="px-6 py-3 bg-gray-900 text-white rounded-xl text-lg shadow-lg
             ring-1 ring-purple-500/50 shadow-purple-500/30
             hover:bg-gray-800 active:scale-95 transition-all duration-150
             flex items-center gap-2"
    >
      ✂️ <span>Olló</span>
    </button>

  </div>
</template>