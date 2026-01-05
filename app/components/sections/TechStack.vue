<script setup lang="ts">
defineProps<{ stacks: any[] }>()
</script>

<template>
  <section id="tech-detailed" class="py-20 px-6 bg-slate-950">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center gap-2 mb-12">
        <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
        <h3 class="font-mono font-black text-xl tracking-tighter uppercase text-slate-400">Tech_Stack</h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="stack in stacks" :key="stack.category" class="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <p class="text-[14px] font-bold text-blue-400 uppercase mb-5 tracking-widest font-mono">
            &lt;{{ stack.category }} /&gt;
          </p>
          <div class="flex flex-wrap gap-2">
            <span v-for="item in stack.items" :key="item" class="px-3 py-1.5 bg-slate-800 text-slate-300 text-xs font-mono rounded border border-slate-700">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>