<script setup lang="ts">
defineProps<{ workstation: any }>()
</script>

<template>
  <section id="spec" class="py-24 px-6 bg-slate-50/50">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center gap-4 mb-16">
        <h3 class="text-3xl font-black italic text-slate-900 uppercase tracking-tighter">Workstation</h3>
        <div class="h-px flex-1 bg-blue-100"></div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div v-for="(list, key) in workstation" :key="key" class="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
          <h4 class="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
            <span class="w-2 h-2 bg-blue-600 rounded-full"></span> {{ key === 'pc' ? 'PC Specifications' : 'Peripheral Gear' }}
          </h4>
          <div class="space-y-6">
            <div v-for="item in list" :key="item.label" class="flex justify-between border-b border-slate-50 pb-2">
              <span class="text-[10px] font-bold text-slate-400 uppercase">{{ item.label }}</span>
              <span class="text-sm font-bold text-slate-700" :class="{ 'font-mono': key === 'pc' }">{{ item.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>