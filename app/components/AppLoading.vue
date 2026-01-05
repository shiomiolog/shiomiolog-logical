<script setup lang="ts">
const isLoading = ref(true)

// マウント後、少し時間を置いてからフェードアウトさせる
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1300)
})
</script>

<template>
  <Transition
    leave-active-class="transition duration-1000 ease-in-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isLoading" class="fixed inset-0 z-[200] bg-slate-900 flex flex-col items-center justify-center">
      <div class="relative mb-8">
        <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center overflow-hidden animate-pulse">
          <img src="/images/icon.png" alt="Loading" class="w-full h-full object-cover">
        </div>
        <div class="absolute -inset-2 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      </div>

      <div class="text-center font-mono">
        <p class="text-blue-400 text-sm tracking-[0.3em] uppercase mb-2">Connecting to Shione System...</p>
        <div class="flex gap-1 justify-center">
          <span v-for="i in 3" :key="i" class="w-2 h-2 bg-blue-600 rounded-full animate-bounce" :style="{ animationDelay: `${i * 0.2}s` }"></span>
        </div>
      </div>
      
      <div class="absolute inset-0 opacity-5 pointer-events-none font-mono text-[10px] text-blue-400 overflow-hidden break-all p-4">
        {{ 'LOADING_PACKET_CATS_PROTOCOL_SHIOMIO_ARTS_LOG_CONNECTED_'.repeat(100) }}
      </div>
    </div>
  </Transition>
</template>