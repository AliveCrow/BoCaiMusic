<template>
  <div class="menu">
    <a-menu mode="horizontal" :default-selected-keys="['1']">
      <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
        <div class="menu-logo">新歌首发</div>
      </a-menu-item>
      <a-menu-item key="1">最新</a-menu-item>
      <a-menu-item key="2">内地</a-menu-item>
      <a-menu-item key="3">港台</a-menu-item>
      <a-menu-item key="4">欧美</a-menu-item>
      <a-menu-item key="5">韩国</a-menu-item>
      <a-menu-item key="6">日本</a-menu-item>
    </a-menu>
  </div>
</template>
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
