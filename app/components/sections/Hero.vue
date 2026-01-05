<script setup lang="ts">
defineProps<{ tags: any[] }>()
</script>

<template>
  <section class="pt-16 pb-24 px-6 bg-gradient-to-b from-white to-blue-50">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      <div class="flex-1 relative order-2 lg:order-1">
        <div class="relative w-full aspect-[4/5] max-w-sm mx-auto">
          <div class="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-5"></div>
          <img src="/avatar.png" alt="汐猫みお" class="relative rounded-3xl shadow-2xl w-full h-full object-cover border-8 border-white" />
        </div>
      </div>
      <div class="flex-1 space-y-8 order-1 lg:order-2">
        <div class="space-y-2">
          <h2 class="text-xl font-black italic text-blue-600 tracking-widest">LOGICAL MODE</h2>
          <h1 class="text-6xl md:text-7xl font-black italic text-slate-900 tracking-tighter">汐猫みお</h1>
          <p class="text-slate-400 font-bold tracking-[0.2em] uppercase">Shioneko Mio</p>
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