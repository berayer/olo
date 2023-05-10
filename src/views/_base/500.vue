<template>
  <div class="flex h-screen items-center justify-center bg-gray-100">
    <n-result status="500" title="500 服务器错误" description="服务器出错可能说明该雇更多程序员了">
      <template #footer>
        <n-button :focusable="false">散财消灾</n-button>
      </template>
    </n-result>
  </div>
</template>
