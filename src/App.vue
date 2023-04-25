<script setup lang="ts">
import { NConfigProvider, zhCN } from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'

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
  }
}
</script>

<template>
  <n-config-provider :locale="zhCN" :theme-overrides="themeOverrides">
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </n-config-provider>
</template>
