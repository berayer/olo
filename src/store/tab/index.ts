import { defineStore } from 'pinia'
import type { MenuOption } from 'naive-ui'

interface TabStore {
  /** 系统当前菜单 */
  menus: MenuOption[]
}

export const useTabStore = defineStore('TabStore', {
  state: (): TabStore => ({
    menus: []
  }),
  actions: {
    /**
     * 全局保存系统菜单
     * 解决实例过深问题 TypeScript类型检查
     * @param options 菜单数组
     */
    setAppMenus(options: MenuOption[]) {
      Object.assign(this.menus, options)
    }
  }
})
