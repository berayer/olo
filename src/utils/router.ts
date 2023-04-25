import { router } from '@/router'

export function registerRouterByMenus(menus: Menu[]) {
  const views = import.meta.glob('/src/views/**/index.vue')
  addRoutes(menus, views)
}

function addRoutes(menus: Menu[], views: Record<string, () => Promise<unknown>>) {
  for (const i in menus) {
    if (menus[i].children && menus[i].children!.length > 0) {
      addRoutes(menus[i].children!, views)
    } else {
      router.addRoute('HomeLayout', {
        path: menus[i].path,
        component: views['/src/views' + menus[i].path + '/index.vue']
      })
    }
  }
}
