<template>
  <div class="space-x-2 px-4">
    <n-popover placement="bottom" trigger="hover" :delay="500">
      <template #trigger>
        <n-button quaternary circle size="small" class="p-5">
          <template #icon>
            <Icon name="material-symbols:add" />
          </template>
        </n-button>
      </template>
      <span>新增</span>
    </n-popover>

    <n-popover placement="bottom" trigger="hover" :delay="500">
      <template #trigger>
        <n-button quaternary circle size="small" class="p-5">
          <template #icon>
            <Icon name="material-symbols:delete-outline" />
          </template>
        </n-button>
      </template>
      <span>删除</span>
    </n-popover>

    <n-popover placement="bottom" trigger="hover" :delay="500">
      <template #trigger>
        <n-button quaternary circle size="small" class="p-5">
          <template #icon>
            <Icon name="material-symbols:refresh-rounded" />
          </template>
        </n-button>
      </template>
      <span>刷新</span>
    </n-popover>
  </div>

  <div class="mt-2">
    <n-data-table
      :data="data"
      :columns="coloums"
      :bordered="false"
      :row-key="(row) => row.id"
      :loading="state.loading"
    />
  </div>
</template>

<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import { v_userList } from '@/api/user'

const data = ref([])
const state = reactive({
  loading: true
})

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

v_userList().then((res) => {
  data.value = res.data
  state.loading = false
})
</script>
