<template>
  <div class="relative w-full min-h-screen text-slate-600 font-sans bg-slate-50/30">

    <div
      class="fixed top-0 right-0 w-[600px] h-[600px] bg-blue-100/20 blur-[120px] rounded-full pointer-events-none z-0">
    </div>
    <div
      class="fixed bottom-0 left-0 w-[600px] h-[600px] bg-cyan-50/40 blur-[120px] rounded-full pointer-events-none z-0">
    </div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 py-20">

      <header class="mb-16 text-center">
        <div
          class="inline-block mb-4 text-blue-600 border border-blue-200 bg-blue-50 px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
          Policy & Terms
        </div>
        <h1 class="text-4xl md:text-6xl font-black italic text-slate-900 mb-4 tracking-tighter uppercase">
          GUIDELINES
        </h1>
        <p class="text-slate-400 font-bold tracking-[0.2em] text-xs">二次創作ガイドライン ・ プライバシーポリシー</p>
      </header>

      <div class="space-y-12">

        <div
          class="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-16 shadow-xl shadow-blue-900/5 backdrop-blur-md">
          <h2 class="text-xl md:text-2xl font-black text-center text-slate-800 mb-12 pb-8 border-b border-slate-100">
            汐猫みお 二次創作等に関するガイドライン
          </h2>

          <div class="space-y-12">
            <section class="space-y-4">
              <h3 class="text-lg font-black text-blue-600 flex items-center gap-3">
                <span class="w-1.5 h-6 bg-blue-600 rounded-full block"></span>
                （目的）
              </h3>
              <div class="text-sm md:text-base leading-relaxed space-y-4 text-slate-500">
                <p>
                  本ガイドラインは、汐猫みお（以下「当方」といいます。）のVTuberコンテンツ（以下「本コンテンツ」といいます。）をより多くの利用者に知っていただき、また、本コンテンツを利用した二次創作活動が活発に行われ、多種多様な作品が創作されることを奨励し、もって文化及び本コンテンツの発展に寄与することを目的として制定するものです。
                </p>
                <p>当方は、利用者の本コンテンツの利用が、本ガイドラインに従ったものであり、かつ、法令や公序良俗等に違反しない内容及び方法である限り、著作権等の権利を行使しません。</p>
                <p>なお、当方は、個別的なルールを別途定める場合があります。その場合、利用者は、本ガイドライン及び別途定める個別的なルールに従って、本コンテンツを利用するものとします。</p>
              </div>
            </section>

            <section v-for="art in fullGuidelines" :key="art.title" class="space-y-6">
              <h3 class="text-lg font-black text-blue-600 flex items-center gap-3 border-b border-blue-50 pb-4">
                <span class="text-blue-300 text-xs">#</span>
                {{ art.title }}
              </h3>

              <div class="pl-2 md:pl-6 space-y-6 text-sm md:text-base leading-relaxed text-slate-500">
                <ol v-if="art.list" class="list-decimal list-outside ml-4 space-y-4">
                  <li v-for="(item, i) in art.list" :key="i">
                    <span v-html="item.text"></span>
                    <ol v-if="item.subList" class="list-[lower-alpha] list-outside ml-6 mt-3 space-y-2 text-slate-400">
                      <li v-for="(sub, si) in item.subList" :key="si" v-html="sub"></li>
                    </ol>
                    <ul v-if="item.dotList" class="list-disc list-outside ml-6 mt-3 space-y-2 text-slate-400">
                      <li v-for="(dot, di) in item.dotList" :key="di" v-html="dot"></li>
                    </ul>
                  </li>
                </ol>
                <p v-else v-html="art.content"></p>
              </div>
            </section>
          </div>
        </div>

        <div id="privacy" class="mt-30 pt-8">
          <div
            class="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-16 shadow-xl shadow-blue-900/5 backdrop-blur-md">
            <h2 class="text-xl md:text-2xl font-black text-slate-800 mb-12 flex items-center gap-3 italic">
              <span
                class="px-3 py-1 bg-slate-900 text-white text-[10px] rounded not-italic tracking-widest">PRIVACY</span>
              プライバシーポリシー
            </h2>

            <div class="space-y-12 text-sm md:text-base leading-relaxed text-slate-500">
              <p>
                汐猫みお（以下、「当方」といいます。）は、当方の提供するウェブサイト（以下、「本サイト」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
              </p>

              <section v-for="p in fullPrivacy" :key="p.title" class="space-y-4">
                <h3 class="font-bold text-slate-800 border-l-4 border-slate-900 pl-4">{{ p.title }}</h3>
                <p v-if="p.content" v-html="p.content"></p>
                <ol v-if="p.list" class="list-decimal list-outside ml-6 space-y-2">
                  <li v-for="li in p.list" :key="li" v-html="li"></li>
                </ol>
              </section>
            </div>
          </div>
        </div>

        <div class="text-center pt-8">
          <NuxtLink to="/"
            class="group inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full hover:bg-blue-600 transition-all duration-500 shadow-lg hover:shadow-blue-200">
            <span
              class="text-[10px] font-black uppercase tracking-[0.3em] group-hover:-translate-x-1 transition-transform italic">Return
              to Home</span>
          </NuxtLink>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface GuidelineItem {
  text: string;
  subList?: string[];
  dotList?: string[];
}

interface GuidelineArticle {
  title: string;
  list?: GuidelineItem[];
  content?: string;
}

const fullGuidelines: GuidelineArticle[] = [
  {
    title: '第1条（二次創作に関する基本原則）',
    list: [
      { text: '二次創作活動は、<strong class="text-slate-900">利用者が個人的かつ非営利の目的で</strong>行う場合に限り許可されます。' },
      {
        text: '以下のいずれかに該当する、またはそのおそれのある創作活動は、目的を問わず禁止します。',
        subList: [
          '本コンテンツをそのまま利用するもの、または単なる改変の域を出ない等、創作性に欠ける利用であるもの。',
          '当方になりすまして本コンテンツを利用するもの。',
          '本コンテンツのイメージを著しく損なう、または当方が不快と感じるもの。',
          '公序良俗に反する、過度に暴力的または性的な表現を含むもの。',
          '特定の思想・信条、宗教的、政治的な内容を含むもの。',
          '当方または第三者の名誉・品位を傷つける、第三者の権利を侵害するもの。',
          'その他、当方が不適切と判断したもの。'
        ]
      },
      { text: '本ガイドラインの適用対象は、個人利用者に限定します。法人その他の団体が本コンテンツの利用を希望する場合は、別途当方まで個別にご連絡ください。' },
      { text: '本ガイドラインに基づき利用できる本コンテンツは、当方が著作権等の権利を有する範囲に限られます。' },
      { text: '本コンテンツの複製物または二次創作物を公開する場合、利用者は、<strong class="text-slate-900 underline decoration-blue-100">「©汐猫みお」</strong>または<strong class="text-slate-900 underline decoration-blue-100">「原作：汐猫みお」</strong>等、当方に関する情報を明記するものとします。' },
      { text: '二次創作物の作成・公開に関して、当方への事前確認は不要とします。' },
      { text: '利用者が公開した二次創作物については、当方の活動において取り上げることがございます。' }
    ]
  },
  {
    title: '第2条（成人向け表現に関する特則）',
    list: [
      { text: '性的、グロテスク、その他<strong class="text-slate-900">ゾーニングが必要な内容</strong>を含む二次創作物については、当方は原則として禁止しません。' },
      { text: 'ただし、そうした作品を公開する際は、未成年者の目に触れないよう、適切な配慮を行ってください。' },
      { text: '<strong class="text-red-500">当方に対するセクシャルハラスメントを意図した表現</strong>は、その内容を問わず一切禁止します。' }
    ]
  },
  {
    title: '第3条（同人活動および販売に関する特則）',
    list: [
      { text: '趣味の範囲内の活動に限り、本コンテンツの二次創作作品を販売することを許可します。' },
      { text: '本コンテンツをそのままコピーする行為によって製造された物品は、二次創作作品とは認められません。' }
    ]
  },
  {
    title: '第4条（切り抜き動画に関する特則）',
    list: [
      { text: 'アーカイブ公開前の投稿は禁止します。' },
      { text: '収益化機能は利用可能ですが、<strong class="text-red-500">Content ID等への登録は禁止します。</strong>' },
      { text: '概要欄には、元動画のURLおよびタイトルを必ず記載してください。' }
    ]
  },
  {
    title: '第5条（応援広告および二次創作イベントに関する特則）',
    list: [
      { text: '応援広告や二次創作イベントを企画・実施することができます。' },
      {
        text: 'ファン活動を実施する際は、以下の事項を遵守してください。',
        dotList: [
          '企画内容には非公式であることを明記すること。',
          '使用する素材は必ず二次的著作物を用いること。',
          '事前にContactページより詳細を連絡すること。',
          '参加費等が発生する場合、営利性を排したものであること。'
        ]
      }
    ]
  },
  {
    title: '第6条（AI生成ファンアートに関する特則）',
    list: [
      { text: 'AI生成ファンアートについては、<strong class="text-red-500">営利目的での利用を禁止します。</strong>' },
      { text: '当方のファンアートを模倣するAI学習、または既存のイラストレーターの画風を模倣したAI生成物は禁止します。' }
    ]
  },
  {
    title: '第10条（準拠法および合意管轄）',
    list: [
      { text: '本ガイドラインは、日本法に準拠します。' },
      { text: '紛争は、<strong class="text-slate-900">東京簡易裁判所</strong>または<strong class="text-slate-900">東京地方裁判所</strong>を専属的合意管轄裁判所とします。' }
    ]
  }
]

const fullPrivacy = [
  {
    title: '第1条（個人情報の利用目的）',
    content: '当方は、お問い合わせフォーム等を通じて得た個人情報（お名前、メールアドレス等）を、以下の目的のためにのみ利用します。',
    list: [
      'お問い合わせに対する回答や確認のご連絡のため',
      '不正・不当な目的でサービスを利用しようとするユーザーの特定、ご利用のお断りのため'
    ]
  },
  {
    title: '第2条（個人情報の第三者提供）',
    content: '当方は、ユーザーからお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、第三者に開示いたしません。',
    list: [
      'ユーザー本人の同意がある場合',
      '法令に基づき開示することが必要である場合'
    ]
  },
  {
    title: '第3条（免責事項）',
    list: [
      '本サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。',
      'また本サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。',
      '本サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。'
    ]
  },
  {
    title: '第4条（お問い合わせ）',
    content: '本ポリシーに関するお問い合わせは、お問い合わせフォームよりお願いいたします。'
  }
]
</script>