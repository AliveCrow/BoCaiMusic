<template>
  <div class="nav">
    <div class="nav-logo">
      {{ CONFIG.sysName }}
    </div>
    <a-input-search class="search-input" :style="{width:'320px'}" placeholder="Please enter something"/>
    <a-space :size="[53]" class="nav-list">
      <a-button status="nav" type="text">发现</a-button>
      <a-button status="nav" type="text">分类</a-button>
      <a-button status="nav" type="text">排行榜</a-button>
    </a-space>
    <a-dropdown >
      <a-avatar :style="{ backgroundColor: '#999999' }">
        <IconUser />
      </a-avatar>
      <template #content>
        <a-doption>Option 1</a-doption>
        <a-doption disabled>Option 2</a-doption>
        <a-doption :value="{ value: 'Option3' }">Option 3</a-doption>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
import CONFIG from '/config.json'
import { IconUser } from '@arco-design/web-vue/es/icon';

</script>

<style scoped lang="less">
@navHeight: 121px;
.nav {
  height: @navHeight;
  background: #FFFFFF;
  box-shadow: 0 3px 7px 1px rgba(0, 0, 0, 0.05000000074505806);
  opacity: 1;

  display: flex;
  align-items: center;
  padding-left: 253px;

  .nav-logo {
    height: 32px;
    font-size: 27px;
    margin-right: 65px;
    font-family: Roboto-Black, Roboto;
    font-weight: 900;
    color: #666666;
    line-height: 37px;
    -webkit-background-clip: text;
  }

  .search-input {
    width: 391px;
    height: 67px;
    margin-right: 69px;
    opacity: 1;
    border: 3px solid #F4F4F4;
    border-radius: 40px;
  }

  .nav-list {
    margin-right: 305px;
  }

}


</style>
