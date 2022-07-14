<template>
  <div class="menu">
    <a-menu mode="horizontal" :default-selected-keys="defaultSelectedKeys">
      <a-menu-item key="-1" :style="{ padding: 0, marginRight: '38px' }" disabled>
        <div class="menu-logo">{{title}}</div>
      </a-menu-item>
      <MenuItem :tabs="tabs" />
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { defineProps} from "vue";
import MenuItem from './MenuItem.vue'

defineProps({
    title: String,
    tabs: {
      type: Array,
      default: () => []
    },
    defaultSelectedKeys: {
      type: Array,
      default: () => ['1']
    }
})

</script>
<style lang="less">
.arco-trigger-menu-selected {
  color: @theme-color !important
}
</style>
<style scoped lang="less">
.menu {
  box-sizing: border-box;
  padding: 0 150px;
  border-bottom: 3px solid #F4F4F4;
  margin-bottom: 80px;
  margin-top: 20px;



  .menu-logo {
    height: 80px;
    font-size: 48px;
    font-family: Roboto-Light, Roboto;
    font-weight: 300;
    color: #4C4C4C;
    line-height: 80px;
    -webkit-background-clip: text;

  }
}
</style>
