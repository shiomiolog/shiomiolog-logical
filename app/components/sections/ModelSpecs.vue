<script setup lang="ts">
defineProps<{ specs: any }>()
</script>

<template>
  <section id="model" class="py-24 px-6 bg-white border-t border-slate-100">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center gap-4 mb-16">
        <h3 class="text-3xl font-black italic text-slate-900 uppercase tracking-tighter">3D Model Specification</h3>
        <div class="h-px flex-1 bg-blue-100"></div>
      </div>
      <div class="mb-20">
        <div class="relative bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden p-4 md:p-8">
          <p class="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
            <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span> Three-View Drawing
          </p>
          <img src="/images/avatar-orthographic.webp" alt="三面図" class="w-full h-auto rounded-xl" />
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="bg-white rounded-3xl p-8 border border-blue-50 shadow-sm">
          <h4 class="font-black text-slate-800 uppercase tracking-widest text-sm mb-8 border-l-4 border-blue-600 pl-4">Technical Specs</h4>
          <div class="grid grid-cols-2 gap-y-6">
            <div v-for="spec in specs.details" :key="spec.label">
              <p class="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{{ spec.label }}</p>
              <p class="text-sm font-bold text-slate-700 font-mono">{{ spec.value }}</p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-3xl p-8 border border-blue-50 shadow-sm">
          <h4 class="font-black text-slate-800 uppercase tracking-widest text-sm mb-8 border-l-4 border-cyan-400 pl-4">Used Materials</h4>
          <div class="space-y-3">
            <a v-for="asset in specs.assets" :key="asset.shop" :href="asset.url" target="_blank" class="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-blue-600 group transition-all">
              <div class="flex flex-col">
                <span class="text-[16px] font-bold text-blue-500 group-hover:text-blue-100 uppercase tracking-widest">{{ asset.item }}</span>
                <span class="text-sm font-black text-slate-700 group-hover:text-white">{{ asset.shop }}</span>
              </div>
              <span class="text-slate-300 group-hover:text-white group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>