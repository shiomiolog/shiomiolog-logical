<template>
  <div class="relative w-full min-h-screen bg-slate-50/30 font-sans overflow-hidden">
    
    <div class="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-100/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
    <div class="fixed bottom-0 left-0 w-[500px] h-[500px] bg-cyan-50/40 blur-[120px] rounded-full pointer-events-none z-0"></div>

    <div class="relative z-10 max-w-4xl mx-auto px-6 py-20">
      
      <header class="mb-12 text-center">
        <div class="inline-block mb-4 text-blue-600 border border-blue-200 bg-blue-50 px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
          Inquiry
        </div>
        <h1 class="text-4xl md:text-6xl font-black italic text-slate-900 mb-4 tracking-tighter uppercase">
          CONTACT
        </h1>
        <p class="text-slate-400 font-bold tracking-[0.2em] text-xs">お問い合わせ</p>
      </header>

      <div class="mb-12 text-center space-y-4 max-w-2xl mx-auto">
        <p class="text-sm md:text-base text-slate-600 leading-relaxed">
          お仕事のご依頼、コラボレーションのご相談などは下記のフォームよりお送りください。
        </p>
        <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          ※送信前に 
          <NuxtLink to="/guidelines" class="text-blue-600 underline underline-offset-2 hover:text-blue-400 transition-colors">プライバシーポリシー</NuxtLink> 
          をご確認ください。
        </p>
      </div>

      <div class="bg-white border border-slate-100 rounded-[2.5rem] shadow-xl shadow-blue-900/5 overflow-hidden backdrop-blur-md">
        <div class="relative w-full flex justify-center py-8 px-4">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSd7lp04oQ4OMzpNU8ahxrolROdLhPpqtr8JChwwp_MPbCge7g/viewform?embedded=true" 
            width="100%" 
            height="1600" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0"
            class="max-w-[640px] rounded-xl"
          >
            読み込んでいます…
          </iframe>
        </div>
      </div>

      <div class="mt-16 text-center">
        <NuxtLink to="/" class="group inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full hover:bg-blue-600 transition-all duration-500 shadow-lg hover:shadow-blue-200">
          <span class="text-[10px] font-black uppercase tracking-[0.3em] group-hover:-translate-x-1 transition-transform italic">Return to Home</span>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>