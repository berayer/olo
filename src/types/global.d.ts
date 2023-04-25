interface Window {
  $loadingBar: import('naive-ui').LoadingBarProviderInst
  $dialog: import('naive-ui').DialogProviderInst
  $message: import('naive-ui').MessageProviderInst
  $notification: import('naive-ui').NotificationProviderInst
  isLoading: boolean
}

/**
 * 后台返回的菜单的类型
 */
type Menu = {
  id: number
  path: string
  label: string
  icon?: string
  children?: Menu[]
}
