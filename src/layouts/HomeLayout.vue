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
        content-style="margin: 0 16px 16px 0; border-radius: 16px; height: calc(100vh - 64px); background-color: #ffffff;"
      >
        <!-- <n-scrollbar class="h-full"> -->
        <router-view />
        <!-- </n-scrollbar> -->
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
import { useRoute } from 'vue-router'
import { router } from '@/router'
import Icon from '@/components/Icon.vue'

const tabStore = useTabStore()
const appStore = useAppStore()
const route = useRoute()

// 设置当前用户的系统菜单
v_getUserMenu().then((res) => {
  tabStore.setAppMenus(coverToMenus(res.data))
  // 注册路由
  registerRouterByMenus(res.data)
  removeAllPatch()
  const is = ohterSkip()
  if (!is && tabStore.menus && tabStore.menus.length > 0) {
    router.push(tabStore.menus[0].key as string)
  }
})

/**
 * 将后台菜单转化为系统菜单
 * @param menus 后台返回的菜单
 */
function coverToMenus(menus: Menu[]): MenuOption[] {
  return menus.map((v) => {
    const item: MenuOption = {
      key: v.path,
      label: v.label,
      icon: () => h(Icon, { name: v.icon, size: 24 }, { default: () => '' })
    }
    if (v.children) {
      item.children = coverToMenus(v.children)
    }
    return item
  })
}

function ohterSkip(): boolean {
  if (route.query && route.query.url && route.query.url != '/index') {
    // 检查路径是否有权限
    const routers = router.getRoutes()
    const one = routers.find(({ path }) => {
      return route.query.url == path
    })
    if (one) {
      let query = JSON.parse(route.query.query as string)
      router.push({
        path: route.query.url as string,
        query: Object.keys(query).length ? query : {}
      })
    } else {
      router.push({ path: '/404', replace: true })
    }
    return true
  }
  return false
}

// 移除全路径匹配导向404
function removeAllPatch() {
  router.removeRoute('NotFound')
  router.addRoute({
    path: '/:path(.*)*',
    name: 'NotFound',
    redirect: '/404'
  })
}
</script>
