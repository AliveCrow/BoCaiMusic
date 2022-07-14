<template>
  <Menu title="我的音乐" :tabs="menuTabs" style="margin-bottom: 10px;" />

  <div class="mine-view">
    <Card>
      <template #title>
        <div class="discover-card-title">我喜欢的最新</div>
      </template>
    </Card>
  </div>

</template>

<script setup lang="ts">
import {tab} from '@/types/common'

const menuTabs: tab[] = [
  {
    label: '我喜欢',
    children: [
      {label: '歌曲'},
      {label: '专辑'},
      {label: '歌单'},
    ],
  },
  {
    label: '我创建的歌单',
  }
]
</script>

<style scoped lang="less">
.mine-view {
  padding: 0 150px;
  .card-style();
}
</style>
