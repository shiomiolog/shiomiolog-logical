<template>
  <div class="min-h-screen bg-slate-50 font-sans flex flex-col">
    <header class="sticky top-0 z-[100] bg-white border-b border-blue-100 px-6 py-4">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="flex items-center gap-3 group relative z-[110]" @click="isMenuOpen = false">
          <span
            class="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center overflow-hidden border-2 border-blue-600/20 shadow-sm transition-transform group-hover:scale-110">
            <img src="/images/icon.png" alt="Icon" class="w-full h-full object-cover">
          </span>

          <span class="font-black italic text-blue-600 tracking-tighter uppercase text-2xl leading-none">
            Shioneko Mio
          </span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink v-for="item in menuItems" :key="item.path" :to="item.path" class="nav-link"
            active-class="active-link">
            {{ item.name }}
          </NuxtLink>
          <a href="https://shiomiomeow.com" class="portal-btn">Portal ↗</a>
        </nav>

        <button @click="isMenuOpen = !isMenuOpen"
          class="md:hidden relative z-[110] p-2 text-blue-600 focus:outline-none" aria-label="Toggle Menu">
          <div class="w-6 h-5 relative flex flex-col justify-between">
            <span
              :class="['w-full h-0.5 bg-current transition-all duration-300', isMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
            <span
              :class="['w-full h-0.5 bg-current transition-all duration-300', isMenuOpen ? 'opacity-0' : '']"></span>
            <span
              :class="['w-full h-0.5 bg-current transition-all duration-300', isMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
          </div>
        </button>
      </div>

      <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 -translate-y-full"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-full">
        <nav v-if="isMenuOpen" class="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center gap-12">
          <NuxtLink v-for="item in menuItems" :key="item.path" :to="item.path"
            class="text-4xl font-black italic text-slate-900 uppercase tracking-tighter" active-class="text-blue-600"
            @click="isMenuOpen = false">
            {{ item.name }}
          </NuxtLink>
          <a href="https://shioneko.mio" class="text-blue-400 font-bold uppercase tracking-[0.3em] text-sm mt-4">
            Portal Site ↗
          </a>
        </nav>
      </transition>
    </header>

    <main class="flex-grow relative z-0">
      <slot />
    </main>

    <footer class="bg-slate-900 text-slate-500 py-12 px-6 text-center text-xs">
      <p class="tracking-[0.2em] uppercase font-bold">&copy; 2026 Shioneko Mio / Logical Mode</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const isMenuOpen = ref(false)
const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Guidelines', path: '/guidelines' },
  { name: 'Contact', path: '/contact' },
]

// メニューが開いている間は背面をスクロールさせない（UX向上）
watch(isMenuOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
html {
  font-size: 16px;
}

.nav-link {
  @apply text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors hover:text-blue-600;
}

.active-link {
  @apply text-blue-600 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full;
}

.portal-btn {
  @apply text-[10px] font-bold px-3 py-1.5 border-2 border-slate-200 rounded-full hover:bg-slate-100 transition-all text-slate-400;
}
</style>