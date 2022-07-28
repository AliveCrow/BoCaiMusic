<template>
  <div class="nav">
    <div class="nav-logo" @click="onClickLogo">
      {{ CONFIG.sysName }}
    </div>
    <a-trigger  :popup-visible="popupVisibility" position="bottom" :blur-to-close="false">
      <a-input-search class="search-input"
                      allow-clear
                      :style="{width:'320px'}"
                      placeholder="关键词"
                      :model-value="keyword"
                      @focus="keyword!=='' ? popupVisibility = true : ''"
                      @input="onKeywordChange"
                      @press-enter="onPressEnter"
                      @clear="searchResults=[];keyword = '';popupVisibility = false"
      />
      <template #content>
        <div class="search-result-list" ref="searchListRef">
          <a-list size="small"
                  :bordered="false"
                  :split="false"
                  :loading="loading"
                  :hoverable="true"
          >
            <a-list-item v-for="item in searchResults" :key="item.id" @click="onSearchItemClick(item)">
              {{ item.name }}
            </a-list-item>
          </a-list>
        </div>
      </template>
    </a-trigger>
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
        <a-doption v-for="item in dropdownList(appStore.loginStatus)" :key="item.label" :value="item"
                   :disabled="item.disabled">{{
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
import {nextTick, onMounted, onUnmounted, reactive, ref, watch} from "vue";
import BoCaiMusic from "@/api/BoCaiMusic";
import {navigateTo} from "@/hooks/common";
import {NAV} from '@/constants/Nav'
import {dropdownList} from "@/hooks/computed";
import useModal from "@/hooks/useModal";
import {Message} from "@arco-design/web-vue";
import useAppStore from "@/store";
import {useNavSearch} from "@/hooks";
import {debounce} from "@/utils";

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()

const onClickLogo = () => {
  navigateTo(router, {
    name: 'Home'
  })
}
const {visible, title, handleBeforeOk} = useModal('登陆您的账户')
const form = reactive({
  name: '',
  password: '',
})
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
const {
  popupVisibility,
  keyword,
  searchResults,
  loading,
  onKeywordChange,
  onSearchItemClick,
  onPressEnter,
} = useNavSearch()

const searchListRef = ref(null)
const clickOutSide = (e: MouseEvent) => {
  if(e) {
    const className = (e.target as Element).className
    if(className !== 'arco-list-item-content') {
      popupVisibility.value = false
    }
  }
}
watch(popupVisibility, async (n) => {
  if(n) {
    await nextTick()
    document.addEventListener('mousedown',clickOutSide)
  }
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
  justify-content: space-evenly;

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

.search-result-list {
  padding: 10px;

  width: 300px;
  background-color: var(--color-bg-popup);
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}

</style>
