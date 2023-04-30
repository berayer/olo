import http from '@/utils/request'

/**
 * 获取用户列表
 */
export function v_userList() {
  return http({
    url: '/user'
  })
}
