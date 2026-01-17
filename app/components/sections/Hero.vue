<script setup lang="ts">
defineProps<{ tags: any[] }>()

// 肉球表示の状態管理
const showPaw = ref(false)

const handleImageClick = () => {
  showPaw.value = true
  // 1.5秒後に自動で消える設定（クリック感を出すための演出）
  setTimeout(() => {
    showPaw.value = false
  }, 1500)
}
</script>

<template>
  <section class="pt-16 pb-24 px-6 bg-gradient-to-b from-white to-blue-50">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      
      <div class="flex-1 relative order-2 lg:order-1">
        <div 
          class="relative w-full aspect-[4/5] max-w-sm mx-auto cursor-pointer group"
          @click="handleImageClick"
        >
          <div class="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-5 group-hover:rotate-6 transition-transform"></div>
          
          <img 
            src="/images/avatar.png" 
            alt="汐猫みお" 
            class="relative rounded-3xl shadow-2xl w-full h-full object-cover border-8 border-white z-10" 
          />

          <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 scale-50 translate-y-4 translate-x-4 rotate-12"
            enter-to-class="opacity-100 scale-100 translate-y-0 translate-x-0 rotate-0"
            leave-active-class="transition duration-500 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-110"
          >
            <div v-if="showPaw" class="absolute bottom-4 right-4 z-20 pointer-events-none">
              <img 
                src="/images/paw-mark.png" 
                alt="Paw" 
                class="w-32 h-32 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transform rotate-12"
              />
            </div>
          </Transition>
        </div>
      </div>

      <div class="flex-1 space-y-8 order-1 lg:order-2">
        <div class="space-y-2">
          <h2 class="text-xl font-black italic text-blue-600 tracking-widest">LOGICAL MODE</h2>
          <h1 class="text-6xl md:text-7xl font-black italic text-slate-900 tracking-tighter">汐猫みお</h1>
          <p class="text-slate-400 font-bold tracking-[0.2em] uppercase">Shione Mio</p>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div v-for="tag in tags" :key="tag.label" class="bg-white p-3 rounded-xl border border-blue-50 shadow-sm">
            <p class="text-[10px] font-bold text-blue-400 uppercase mb-1">{{ tag.label }}</p>
            <p class="text-sm font-bold text-slate-700">{{ tag.value }}</p>
          </div>
        </div>

        <p class="text-slate-600 leading-relaxed font-medium">
          論理的に遊び、エンターテインメントを構築する。<br>
          配信という舞台で情報の深淵を読み解く、青い世界の住人です。
        </p>
      </div>
    </div>
  </section>
</template>