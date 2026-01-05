<template>
  <div>
    <SectionsHero :tags="profileTags" />
    <SectionsProfileStatus :profile="fullProfile" :creators="creators" />
    <SectionsActiveProcesses :processes="activeProcesses" />
    <SectionsTechStack :stacks="detailedTechStack" />
    <SectionsModelSpecs :specs="modelSpecs" />
    <SectionsWorkstationGear :workstation="workstation" />
    <SectionsActivityHistory :history="history" />
    <SectionsSocialLinks :links="socialLinks" />
  </div>
</template>

<script setup lang="ts">
const { 
    profileTags, 
    socialLinks, 
    fullProfile, 
    creators, 
    modelSpecs, 
    workstation, 
    history, 
    activeProcesses, 
    detailedTechStack 
} = useProfileData()

useSeoMeta({
  title: '汐猫みお | Logical Mode Official',
  ogTitle: '汐猫みお | Logical Mode Official',
  description: '論理的に遊び、エンターテインメントを構築する。配信という舞台で情報の深淵を読み解く、青い世界の住人です。',
  ogDescription: '論理的に遊び、エンターテインメントを構築する。配信という舞台で情報の深淵を読み解く、青い世界の住人です。',
  ogImage: '/ogp-image.png', // 1200x630推奨
  twitterCard: 'summary_large_image',
  twitterSite: '@shiomiomeow',
  twitterCreator: '@shiomiomeow',
})
</script>