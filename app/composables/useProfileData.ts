export const useProfileData = () => {
    const profileTags = [
        { label: 'Fan Mark', value: '🐾💎' },
        { label: 'Fan Name', value: '汐猫観測隊' },
        { label: 'Stream Tag', value: '#汐猫LIVE' },
        { label: 'Art Tag', value: '#みおあーと' },
    ]

    const socialLinks = [
        { name: 'YouTube', handle: '@shionemio', url: 'https://www.youtube.com/@shionemio', icon: '📺' },
        { name: 'X / Twitter', handle: '@mio_shioneko', url: '#', icon: '/icons/x-logo.png' },
        { name: 'Mond', handle: 'Send Questions', url: 'https://mond.how/ja/shiomiomeow', icon: '/icons/mond-logo.png' },
    ]

    const fullProfile = [
        { label: '名前 / Name', value: '汐猫みお (しおね みお)' },
        { label: '職業 / Job', value: 'Virtual YouTuber / Programmer' },
        { label: '出身地 / Birthplace', value: '千葉県' },
        { label: '専門領域 / Domain', value: '情報科学全般（主に低レイヤー・セキュリティ・ソフトウェア）' },
        { label: '誕生日 / Birthday', value: '5月14日' },
        { label: '資格 / Cert', value: 'ITパスポート試験 / 情報セキュリティマネジメント試験' },
        { label: '言語 / Language', value: 'Japanese / English(Basic)' },
        { label: '生息地 / Habitat', value: 'インターネットの海' },
    ]

    const creators = [
        { role: 'キャラクターデザイン', name: '汐猫みお (@username)' },
    ]

    const modelSpecs = {
        version: '1.2.0',
        base: 'VRoid Studio',
        tools: ['VRoid Studio'],
        details: [
            { label: 'Format', value: 'VRM 1.0' },
            { label: 'Polygon Count', value: '66,999 tris' },
            { label: 'Material Count', value: '20' },
            { label: 'Bone Count', value: '137' },
            { label: 'Shaders', value: 'MToon' },
        ],
        assets: [
            { shop: 'Team.Aether', item: 'Skin Texture', url: 'https://teamaether.booth.pm/items/1247301' },
            { shop: 'しらとりこはね【とりんご】', item: 'Hair & Face Textures', url: 'https://shiratori.booth.pm/items/3190732' },
            { shop: 'Serena Kupopo', item: 'Hair Assets', url: 'https://kupopo.booth.pm/items/6669122' },
            { shop: 'NURIEYA', item: 'Graphic T-Shirt', url: 'https://nurieya.booth.pm/items/4777815' },
            { shop: '蒼空の下の市場', item: 'Pleated Skirt', url: 'https://sky-blue.booth.pm/items/2714981' },
            { shop: 'ビンの工房', item: 'Over-Sized Hoodie', url: 'https://bigbin.booth.pm/items/6426255' },
        ]
    }

    const workstation = {
        pc: [
            { label: 'CPU', value: 'AMD Ryzen 5 4600H' },
            { label: 'GPU', value: 'AMD Radeon(TM) Graphics' },
            { label: 'RAM', value: '24GB DDR4-2666' },
            { label: 'OS', value: 'Windows 11 Pro / Ubuntu 24.04 LTS' },
        ],
        gear: [
            { label: 'Keyboard', value: 'Logicool K295 Silent Wireless Keyboard K295OW' },
            { label: 'Mouse', value: 'ELECOM EX-G M-XGL10UBWH' },
            { label: 'Monitor', value: 'FHD 24 inch + 15.6 inch' },
            { label: 'Audio I/F', value: 'N/A' },
        ]
    }

    const history = [
        { date: '2024.08.26', event: 'Logical Mode 起動', desc: 'インターネットの海に、論理の欠片を紡ぎ始めました。' },
        { date: '2024.08.31', event: 'IT系VTuberグループ「ぶいぎーく！」に参加！', desc: '技術とエンタメの融合を目指す仲間たちと共に。' },
        { date: '2025.08.26', event: '活動1周年', desc: '自身の機体スペックを大幅にアップデート。' },
        { date: '2025.12.01', event: '旧アバターでの活動終了', desc: '長らく共に戦ってきた旧アバターとの別れ。' },
        { date: '2026.01.01', event: 'Virtual YouTuber再始動', desc: '新たな論理の旅路が始まります。' },
        { date: '2026.01.05', event: '汐猫みお 公式ポータルサイト 公開', desc: '論理と物理の境界線を整理し、ハブとして機能開始。' },
    ]

    const activeProcesses = [
        { title: 'Competitive Programming', status: 'Running', detail: 'AtCoder / Algorithm', icon: '⚡', statusClass: 'bg-emerald-500/10 text-emerald-500' },
        { title: 'CTF / Security', status: 'Running', detail: 'Hack the Box / Vulnerability Assessment', icon: '🛡️', statusClass: 'bg-emerald-500/10 text-emerald-500' },
        { title: 'IT Law & Cases', status: 'Loading', detail: '情報法・IT関連判例の学習', icon: '⚖️', statusClass: 'bg-blue-500/10 text-blue-500' },
        { title: 'Game Streaming', status: 'Online', detail: 'FPS, RPG, Board Games', icon: '🎮', statusClass: 'bg-cyan-500/10 text-cyan-500' },
    ]

    const detailedTechStack = [
        { category: 'Languages', items: ['TypeScript', 'Rust', 'Python', 'C', 'C++'] },
        { category: 'Frameworks / Web', items: ['Nuxt.js', 'Vue.js', 'Tailwind CSS'] },
        { category: 'Security / Core', items: ['CTF (Pwn/Web/OSINT)', 'Low-layer', 'Linux (Ubuntu)'] },
        { category: 'Tools', items: ['VS Code', 'Git', 'Docker'] },
    ]

    return {
        profileTags,
        socialLinks,
        fullProfile,
        creators,
        modelSpecs,
        workstation,
        history,
        activeProcesses,
        detailedTechStack
    }
}