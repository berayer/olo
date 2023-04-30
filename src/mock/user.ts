import Mock from 'mockjs'

Mock.mock('/v2/user', {
  code: 200,
  msg: '',
  'data|1-20': [
    {
      'id|+1': 1,
      username: '@first',
      nickName: '@cname',
      phone: '@string("number", 11)',
      'roles|1-2': ['管理员', '用户', '经销商', '二级管理员']
    }
  ]
})
