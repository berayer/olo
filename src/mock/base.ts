import Mock from 'mockjs'

/**
 * 用户登陆
 */
Mock.mock('/v2/login', {
  code: 200,
  msg: ''
})

Mock.mock('/v2/userMenu', {
  code: 200,
  msg: '',
  data: [
    {
      id: 1,
      label: '首页',
      path: '/home'
    },
    {
      id: 2,
      label: '系统管理',
      path: '/system',
      children: [
        {
          id: 3,
          label: '用户管理',
          path: '/system/user'
        },
        {
          id: 4,
          label: '角色管理',
          path: '/system/role'
        },
        {
          id: 5,
          label: '菜单管理',
          path: '/system/menu'
        }
      ]
    },
    {
      id: 6,
      label: '关于',
      path: '/about'
    }
  ]
})
