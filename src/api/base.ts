import http from '@/utils/request'

/**
 * 登陆接口
 * @param data 登陆参数
 */
export function v_login(data: { username: string; password: string; rememberMe: boolean }) {
  return http({
    url: '/login',
    method: 'post',
    data: data
  })
}

/**
 * 获取用户的菜单
 */
export function v_getUserMenu() {
  return http({
    url: '/userMenu'
  })
}
