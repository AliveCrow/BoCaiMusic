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
    <a-dropdown @select="onDropdownSelect">
      <a-avatar :style="{ backgroundColor: '#999999' }">
        <IconUser/>
      </a-avatar>
      <template #content>
        <a-doption v-for="item in dropdownList" :key="item.label" :value="item" :disabled="item.disabled">{{ item.label }}</a-doption>
      </template>
    </a-dropdown>
    <a-modal width="400"  v-model:visible="visible" @cancel="visible = false" :on-before-ok="handleBeforeOk" unmountOnClose>
      <template #title>
        Title
      </template>
      <div>
        <a-form :model="form" :style="{width:'400px'}">
          <a-form-item field="name" label="账号">
            <a-input v-model="form.name" placeholder="please enter your 账号..." />
          </a-form-item>
          <a-form-item field="post" label="密码">
            <a-input v-model="form.post" placeholder="please enter your 密码..." />
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import CONFIG from '/config.json'
import {IconUser} from '@arco-design/web-vue/es/icon';
import {useRoute, useRouter} from "vue-router";
import {ref,reactive} from "vue";

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

const dropdownList = [
  {
    label: '登陆',
    name: 'Login',
    disabled: false
  },
  {
    label: '主页',
    name: 'Mine',
    disabled: false
  },
  {
    label: '退出登陆',
    name: 'LogOut',
    disabled: false
  }
]
const visible = ref(false);
const onDropdownSelect = (e: { label: string, name: string }) => {
  if(e.label === '登陆') {
    visible.value = true
  } else {
    router.push({name: e.name})
  }
}
const handleBeforeOk = (done: (closed: boolean) => void) => {
  done(true)
}

const form = reactive({
  name: '',
  post: '',
})

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
