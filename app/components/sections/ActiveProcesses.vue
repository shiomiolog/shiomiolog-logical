<script setup lang="ts">
defineProps<{ processes: any[] }>()
</script>

<template>
  <section id="processes" class="py-12 px-6 bg-slate-800 text-white">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center gap-2 mb-10">
        <span class="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
        <h3 class="font-mono font-black text-xl tracking-tighter uppercase text-cyan-400">Active_Processes</h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="proc in processes" :key="proc.title" class="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex items-center gap-6 group hover:border-cyan-500/50 transition-colors">
          <div class="text-3xl group-hover:scale-110 transition-transform">{{ proc.icon }}</div>
          <div class="flex-1">
            <div class="flex items-center justify-between mb-1">
              <h4 class="font-black text-slate-200 text-sm uppercase tracking-tight">{{ proc.title }}</h4>
              <span :class="['text-[9px] px-2 py-0.5 rounded font-bold uppercase', proc.statusClass]">{{ proc.status }}</span>
            </div>
            <p class="text-[16px] text-slate-500 font-mono">{{ proc.detail }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>