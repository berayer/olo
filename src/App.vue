<template>
  <n-config-provider
    :locale="zhCN"
    :theme-overrides="themeOverrides"
    :theme="isDark ? darkTheme : undefined"
  >
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, zhCN } from 'naive-ui'
import { darkTheme } from 'naive-ui'
import { useDark } from '@vueuse/core'
import { NaiveLightTheme, NaiveDarkTheme } from './config'

// 是否暗黑模式
const isDark = useDark()
// Naive主题配置
console.log(isDark.value)
const themeOverrides = computed(() => {
  return isDark.value ? NaiveDarkTheme : NaiveLightTheme
})
</script>
