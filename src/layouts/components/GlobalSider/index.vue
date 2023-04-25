<template>
  <div class="flex h-12 items-center justify-center">olo</div>
  <n-menu :options="tabStore.menus" @update:value="handleUpdateValue"></n-menu>
</template>

<script setup lang="ts">
import { useTabStore } from '@/store/tab'
import { router } from '@/router'

const tabStore = useTabStore()

function handleUpdateValue(key: string) {
  router.push(key)
}
</script>
