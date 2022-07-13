<template>
  <div class="nav">
    <div class="nav-logo">
      {{ CONFIG.sysName }}
    </div>
    <!--    <a-input-search class="search-input" :style="{width:'320px'}" placeholder="Please enter something"/>-->
    <a-auto-complete allow-clear class="search-input" :data="data" @search="handleSearch" :style="{width:'320px'}" placeholder="关键字" />
    <a-space :size="[53]" class="nav-list">
      <a-button status="nav" type="text" v-for="item in navList" :class="route.name === item.routeName?'active': ''"
                :key="item.label" @click="toRoute(item)">
        {{ item.label }}
      </a-button>
    </a-space>
    <a-dropdown>
      <a-avatar :style="{ backgroundColor: '#999999' }">
        <IconUser/>
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
import {IconUser} from '@arco-design/web-vue/es/icon';
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";

interface NavItem {
  label: string,
  routeName: string,
}

const router = useRouter()
const route = useRoute()
const navList: NavItem[] = [
  {
    label: '发现',
    routeName: 'Home'
  },
  {
    label: '分类',
    routeName: 'Category'
  },
  {
    label: '排行榜',
    routeName: 'Rank'
  }
]
const data = ref<string[]>([])


const toRoute = (e: NavItem) => {
  router.push({name: e.routeName})
}
const handleSearch = (value: string) => {
  if (value) {
    data.value = [...Array(5)].map((_, index) => `${value}-${index}`)
  } else {
    data.value = []
  }
}

</script>

<style scoped lang="less">
@navHeight: 121px;

/deep/ .search-input {
  height: 67px !important;
  margin-right: 69px !important;
  opacity: 1 !important;
  border: 3px solid #F4F4F4 !important;
  border-radius: 40px !important;
}

.nav {
  height: @navHeight;
  background: #FFFFFF;
  box-shadow: 0 3px 7px 1px rgba(0, 0, 0, 0.05000000074505806);
  opacity: 1;

  display: flex;
  align-items: center;
  padding-left: 253px;

  .active {
    color: @theme-color !important;
  }

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


  .nav-list {
    margin-right: 305px;
  }

}


</style>
