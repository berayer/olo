<template>
  <div class="flex h-full items-center justify-between">
    <div class="flex h-full items-center space-x-2">
      <n-button quaternary :focusable="false" size="small" class="h-full">
        <template #icon>
          <Icon v-if="true" name="ant-design:menu-fold-outlined" />
          <Icon v-else name="ant-design:menu-unfold-outlined" />
        </template>
      </n-button>
      <n-breadcrumb>
        <n-breadcrumb-item> <icon name="gg:menu-round" /> 北京总行</n-breadcrumb-item>
        <n-breadcrumb-item> <icon name="gg:menu-round" /> 天津分行</n-breadcrumb-item>
        <n-breadcrumb-item> <icon name="gg:menu-round" /> 平山道支行</n-breadcrumb-item>
      </n-breadcrumb>
    </div>
    <div class="flex h-full">
      <div class="h-full">
        <n-button size="small" quaternary :focusable="false" class="h-full">
          <template #icon> <icon name="ic:outline-search" :size="20" /></template>
        </n-button>
        <n-button size="small" quaternary :focusable="false" class="h-full">
          <template #icon> <icon name="mdi:github" :size="20" /> </template
        ></n-button>
        <n-button size="small" quaternary :focusable="false" class="h-full">
          <template #icon> <icon name="mdi:fullscreen" :size="20" /></template>
        </n-button>
        <n-button size="small" quaternary :focusable="false" class="h-full">
          <template #icon> <icon name="mdi:theme-light-dark" :size="20" /></template>
        </n-button>

        <n-button size="small" quaternary :focusable="false" class="h-full">
          <template #icon>
            <n-badge :value="13" :max="15" :offset="[6, -2]">
              <icon name="mdi:bell-outline" :size="20" color="#000"
            /></n-badge>
          </template>
        </n-button>
      </div>
      <div
        class="flex h-full cursor-pointer select-none items-center space-x-2 px-2 hover:bg-[--n-color-hover]"
      >
        <n-avatar
          round
          :size="24"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
        <span class="pr-4 text-base font-medium"> 卢本伟</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
