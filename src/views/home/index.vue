<template>
  <n-button text>首页</n-button>
  <div>
    当前模式: <span>{{ isDark }}</span>
  </div>
  <n-button @click="toggleDark()">切换</n-button>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
