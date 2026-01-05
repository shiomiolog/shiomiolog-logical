<script setup lang="ts">
defineProps<{ profile: any[], creators: any[] }>()
</script>

<template>
  <section id="about" class="py-24 px-6 bg-slate-50/50 overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h3 class="text-3xl font-black italic text-slate-900 tracking-tighter uppercase">Profile</h3>
        <div class="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-2 rounded-full"></div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-8">
          <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <div class="flex items-center gap-2 mb-8 border-l-4 border-blue-600 pl-4">
              <h4 class="font-black text-slate-800 uppercase tracking-widest text-lg">基本情報 / STATUS</h4>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div v-for="item in profile" :key="item.label" class="space-y-1">
                <p class="text-[10px] font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> {{ item.label }}
                </p>
                <p class="text-sm font-bold text-slate-700 pl-3.5">{{ item.value }}</p>
              </div>
            </div>
            <div class="mt-10 pt-10 border-t border-slate-50">
              <div class="space-y-4">
                <p class="text-[10px] font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Introduction
                </p>
                <p class="text-sm leading-loose text-slate-600 font-medium pl-3.5">
                  論理（デジタル）と物理（リアル）の狭間で、新しいエンターテインメントをデバッグ中。<br>
                  配信活動を通じて情報の海を観測し、観測隊のみんなと一緒に、面白い「コード」を紡いでいきたいにゃ。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-8">
          <div class="bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
            <div class="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-50">
              <img src="/avatar-all.webp" alt="汐猫みお" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <div class="flex items-center gap-2 mb-6">
              <h4 class="font-black text-slate-800 uppercase tracking-widest text-sm italic">Creator</h4>
              <span class="text-[10px] text-slate-400">※敬称略</span>
            </div>
            <div class="space-y-4">
              <div v-for="creator in creators" :key="creator.role" class="space-y-1">
                <p class="text-[10px] font-bold text-slate-400 uppercase">{{ creator.role }}</p>
                <p class="text-xs font-bold text-slate-700">{{ creator.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>