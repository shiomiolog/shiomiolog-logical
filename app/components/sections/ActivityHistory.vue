<script setup lang="ts">
// Propsでhistoryデータを受け取る
defineProps<{ history: any[] }>()
</script>

<template>
  <section id="history" class="py-24 px-6 bg-white overflow-hidden">
    <div class="max-w-6xl mx-auto text-center mb-20">
      <h3 class="text-3xl font-black italic text-slate-900 tracking-tighter uppercase">Activity History</h3>
      <div class="w-12 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></div>
    </div>

    <div class="max-w-6xl mx-auto relative">
      <div class="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-0.5 h-full bg-slate-100"></div>

      <div class="space-y-12 md:space-y-0">
        <div v-for="(item, index) in history" :key="index" 
          class="relative flex items-start group min-h-[120px]">
          
          <div :class="[
            'absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10 transition-transform group-hover:scale-125 shadow-sm top-1 md:top-2'
          ]"></div>

          <div :class="[
            'w-full md:w-1/2 pl-12 md:pl-0', 
            index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:ml-auto md:pl-16 md:text-left'
          ]">
            <div class="space-y-1">
              <time class="text-[10px] font-bold text-blue-400 font-mono tracking-widest uppercase">{{ item.date }}</time>
              <h4 class="text-lg font-black text-slate-800 leading-tight">{{ item.event }}</h4>
              <p v-if="item.desc" class="text-xs text-slate-400 mt-2 leading-relaxed max-w-sm" 
                :class="{ 'md:ml-auto': index % 2 === 0 }">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>