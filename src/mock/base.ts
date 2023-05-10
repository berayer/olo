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
      path: '/home',
      icon: 'mdi:home-outline'
    },
    {
      id: 2,
      label: '系统管理',
      path: '/system',
      icon: 'mdi:cog-outline',
      children: [
        {
          id: 3,
          label: '用户管理',
          path: '/system/user',
          icon: 'mdi:account-outline'
        },
        {
          id: 4,
          label: '角色管理',
          path: '/system/role',
          icon: 'mdi:account-group-outline'
        },
        {
          id: 5,
          label: '菜单管理',
          path: '/system/menu',
          icon: 'mdi:view-grid-outline'
        }
      ]
    },
    {
      id: 6,
      label: '关于',
      path: '/about',
      icon: 'mdi:information-outline'
    }
  ]
})
