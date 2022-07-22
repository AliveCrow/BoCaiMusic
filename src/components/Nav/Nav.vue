<template>
  <div class="nav">
    <div class="nav-logo" @click="onClickLogo">
      {{ CONFIG.sysName }}
    </div>
    <!--    <a-input-search class="search-input" :style="{width:'320px'}" placeholder="Please enter something"/>-->
<!--    <a-auto-complete allow-clear class="search-input" :data="data" @search="handleSearch" :style="{width:'320px'}" placeholder="关键字" />-->
<!--    <a-mention :model-value="keyword" :data="data" placeholder="关键字" :prefix="keyword"  @change="onMentionChange" @select="onMentionSelect" />-->
    <a-select :options="options" class="search-input" :style="{width:'320px'}" allow-clear allow-search placeholder="关键字"
              @search="handleSelectSearch" @clear="options = []">
    </a-select>

    <a-space :size="[53]" class="nav-list">
      <a-button status="nav" type="text" v-for="item in NAV" :class="route.name === item.routeName?'active': ''"
                :key="item.label" @click="navigateTo(router,{name: item.routeName})">
        {{ item.label }}
      </a-button>
    </a-space>
    <a-dropdown @select="onDropdownSelect">
      <a-avatar :style="{ backgroundColor: '#999999' }">
        未登陆
      </a-avatar>
      <template #content>
        <a-doption v-for="item in dropdownList(appStore.loginStatus)" :key="item.label" :value="item" :disabled="item.disabled">{{
            item.label
          }}
        </a-doption>
      </template>
    </a-dropdown>
    <a-modal
        width="400"
        v-model:visible="visible"
        @cancel="visible = false"
        :on-before-ok="(done) => handleBeforeOk(done, handleLogin)"
        unmountOnClose>
      <template #title>
        {{ title }}
      </template>
      <div>
        <a-form :model="form" :style="{width:'400px'}">
          <a-form-item field="name" label="账号">
            <a-input allow-clear v-model="form.name" placeholder="请输入账号..."/>
          </a-form-item>
          <a-form-item field="password" label="密码">
            <a-input allow-clear v-model="form.password" type="password" placeholder="请输入密码..."/>
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import CONFIG from '/config.json'
import {useRoute, useRouter} from "vue-router";
import {reactive, ref} from "vue";
import BoCaiMusic from "@/api/BoCaiMusic";
import {navigateTo} from "@/hooks/common";
import {NAV} from '@/constants/Nav'
import {dropdownList} from "@/hooks/computed";
import useModal from "@/hooks/useModal";
import {Message} from "@arco-design/web-vue";
import useAppStore from "@/store";

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()

const data = ref<string[]>([])
const {
  visible,
  title,
  handleBeforeOk
} = useModal('登陆您的账户')
const handleLogin = async (done: (closed: boolean) => void) => {
  const cookieRes = await BoCaiMusic.user_bind_post({
    username: form.name,
    password: form.password,
  })
  BoCaiMusic.user_setCookie_post({
    data: cookieRes.data
  }).then(result => {
    Message.success(result.data)
    appStore.loginStatus = true
    done(true)
  })
}
const onDropdownSelect = (e: { label: string, name: string }) => {
  if (e.label === '登陆') {
    visible.value = true
  } else if (e.label === '退出登陆') {
    appStore.loginStatus = false
  } else {
    router.push({name: e.name})
  }
}

const form = reactive({
  name: '',
  password: '',
})

let options = ref([])
let keyword = ref('')
const handleSelectSearch = async (e:string) => {
  options.value = []
  const res = await BoCaiMusic.search_get({
    keyword: e
  })
  keyword.value = e
  options.value = res.data.list.map(r => {
    return {
      label: r.name + '——' + e,
      value: r.mid
    }
  })
}
const onClickLogo = () => {
  navigateTo(router, {
    name: 'Home'
  })
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
    cursor: pointer;
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
