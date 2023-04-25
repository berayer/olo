<template>
  <div class="space-x-5 px-4">
    <n-button text >
      <template #icon>
        <MaterialSymbolsAdd />
      </template>
    </n-button>
    <n-button text> 删除 </n-button>
    <n-button text> 刷新 </n-button>
    <n-button text> 用户 </n-button>
  </div>
  <n-divider />
  <div>
    <n-data-table
      :data="data"
      :columns="coloums"
      :bordered="false"
      :row-key="(row) => row.username"
    />
  </div>
</template>

<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import MaterialSymbolsAdd from '~icons/material-symbols/add'

const data = [
  {
    username: 'admin',
    nickName: '超级管理员',
    phone: '88886666',
    roles: ['管理员', '用户']
  },
  {
    username: 'user1',
    nickName: '马飞飞',
    phone: '',
    roles: ['用户']
  },
  {
    username: 'wangjichao',
    nickName: '王继超',
    phone: '17671075980',
    roles: ['主播']
  },
  {
    username: 'lubenwei666',
    nickName: '卢本伟',
    phone: '',
    roles: ['小丑']
  }
]
const coloums: DataTableColumns = [
  {
    type: 'selection'
  },
  {
    title: '用户名',
    key: 'username'
  },
  {
    title: '昵称',
    key: 'nickName'
  },
  {
    title: '电话',
    key: 'phone'
  },
  {
    title: '角色',
    key: 'roles'
  }
]
</script>
