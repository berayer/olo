<script setup lang="ts">
import { NConfigProvider, zhCN } from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'
import { darkTheme } from 'naive-ui'
import { useDark } from '@vueuse/core'

const isDark = useDark()
// 主题配置
const themeOverrides: GlobalThemeOverrides = {
  Layout: {
    siderColor: '#e3e3e3',
    headerBorderColor: '#d3d3a3',
    headerColor: '#e3e3e3',
    siderBorderColor: '#f3ad3d',
    color: '#e3e3e3'
  },
  Menu: {
    borderRadius: '16px'
  },
  Card: {
    borderRadius: '16px'
  },
  Button: {
    borderRadiusSmall: 'none'
  }
}
</script>

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
