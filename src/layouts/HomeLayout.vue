<template>
  <n-layout has-sider class="h-screen">
    <n-layout-sider :width="appStore.siderWidth">
      <GlobalSider />
    </n-layout-sider>
    <n-layout class="h-full">
      <n-layout-header class="h-12">
        <GlobalHeader />
      </n-layout-header>
      <n-layout-content
        content-style="margin: 0 16px 16px 0; border-radius: 16px; height: calc(100vh - 64px); padding: 16px 0 16px 0; background-color: #ffffff;"
      >
        <n-scrollbar class="h-full">
          <router-view />
        </n-scrollbar>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { MenuOption } from 'naive-ui'
import { GlobalHeader, GlobalSider } from './components'
import { v_getUserMenu } from '@/api'
import { useTabStore, useAppStore } from '@/store'
import { registerRouterByMenus } from '@/utils/router'

const tabStore = useTabStore()
const appStore = useAppStore()

// 设置当前用户的系统菜单
v_getUserMenu().then((res) => {
  tabStore.setAppMenus(coverToMenus(res.data))
  // 注册路由
  registerRouterByMenus(res.data)
})

/**
 * 将后台菜单转化为系统菜单
 * @param menus 后台返回的菜单
 */
function coverToMenus(menus: Menu[]): MenuOption[] {
  return menus.map((v) => {
    const item: MenuOption = {
      key: v.path,
      label: v.label
    }
    if (v.children) {
      item.children = coverToMenus(v.children)
    }
    return item
  })
}
</script>
