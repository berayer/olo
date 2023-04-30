import Mock from 'mockjs'
import './base'
import './user'

Mock.setup({
  timeout: '50-1000'
})

export function setupMockjs() {
  console.log('已加载: mockjs')
}
