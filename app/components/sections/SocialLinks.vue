<script setup lang="ts">
defineProps<{ links: any[] }>()
const isImagePath = (icon: string) => icon.startsWith('/')
</script>

<template>
  <section class="py-24 px-6 bg-slate-50/50 border-t border-slate-100">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center gap-4 mb-12">
        <h3 class="text-2xl font-black italic text-slate-900 uppercase tracking-tighter">Connect</h3>
        <div class="h-px flex-1 bg-slate-200"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a v-for="sns in links" :key="sns.name" :href="sns.url" target="_blank"
          class="flex flex-col items-center p-10 bg-white rounded-[2rem] border border-slate-100 hover:border-blue-400 hover:shadow-xl transition-all group relative overflow-hidden">

          <div class="mb-6 group-hover:scale-110 transition-transform duration-300">
             <img v-if="isImagePath(sns.icon)" :src="sns.icon" :alt="sns.name" class="h-12 w-auto object-contain" />
            <span v-else class="text-5xl">{{ sns.icon }}</span>
          </div>

          <div class="text-center relative z-10">
            <p class="font-black italic text-slate-900 text-xl uppercase tracking-tighter">{{ sns.name }}</p>
            <p class="text-blue-500 font-bold text-[10px] mt-2 tracking-[0.2em] uppercase">{{ sns.handle }}</p>
          </div>

          <div class="mt-6 text-slate-300 group-hover:text-blue-500 transition-colors">
            <span class="text-xs font-bold tracking-widest uppercase">Open Link ↗</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>