<template>
  <n-button>图标选择器</n-button>
  <svg ></svg>
</template>

<script setup lang="ts">
import { icons } from '@iconify-json/mdi'

const keys = Object.keys(icons.icons)
console.log(icons.icons[keys[0]])
</script>
