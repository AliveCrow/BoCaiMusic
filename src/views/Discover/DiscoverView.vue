<template>
  <Carousel  />

  <Menu title="新歌首发" :tabs="menuTabs" @tabClick="onTabClick"/>

  <div class="discover">
    <Card style="height: 740px">
      <template #title>
        <div class="discover-card-title">{{ selectTab(newSongType * 1).label }}</div>
      </template>
      <template #extra>
        <a-space>
          <a-button type="text">
            <template #icon>
              <icon-arrow-left class="discover-card-icon" :strokeWidth="5"/>
            </template>
          </a-button>
          <a-button type="text">
            <template #icon>
              <icon-arrow-right class="discover-card-icon" :strokeWidth="5"/>
            </template>
          </a-button>
        </a-space>
      </template>
      <template #default>
        <a-spin :loading="loading">
          <div class="discover-card-content">
            <a-row :gutter="30" style="justify-content: space-between">
              <a-col :span="4" v-for="song in newSongList" :key="song.id">
                <a-card :bordered="false" class="discover-card-item">
                  <template #cover>
                    <div
                        :style="{overflow: 'hidden'}"
                    >
                      <img
                          :style="{ 'max-width': '203px', 'max-height': '203px', transform: 'translateY(-20px)' }"
                          alt="dessert"
                          :src="`https://y.qq.com/music/photo_new/T002R300x300M000${song.album.mid}.jpg?max_age=2592000`"
                      />
                    </div>
                  </template>
                  <a-card-meta class="discover-card-meta">
                    <template #title>
                      <div class="discover-card-meta-title">{{ song.name }}</div>
                    </template>
                    <template #description>
                      <div class="discover-card-meta-description">{{ song.album.name }}</div>
                    </template>
                  </a-card-meta>
                </a-card>
              </a-col>
            </a-row>
          </div>
        </a-spin>
      </template>
    </Card>

    <div class="row-image">
      <a-row :gutter="40">
        <a-col :span="6" v-for="album in albumList" :key="album.id">
          <a-spin :loading="albumLoading" style="width:100%">
            <a-image
                :preview="false"
                class="album-img"
                width="100%"
                height="201px"
                :src="`https://y.qq.com/music/photo_new/T002R300x300M000${album.mid}.jpg?max_age=2592000`"
                :title="album.name"
            />
          </a-spin>
        </a-col>
      </a-row>
    </div>

    <Card style="height: 520px">
      <template #title>
        <div class="discover-card-title">MV-{{ selectTab(newSongType * 1).label }}</div>
      </template>
      <template #extra>
        <a-space>
          <a-button type="text">
            <template #icon>
              <icon-arrow-left class="discover-card-icon" :strokeWidth="5"/>
            </template>
          </a-button>
          <a-button type="text">
            <template #icon>
              <icon-arrow-right class="discover-card-icon" :strokeWidth="5"/>
            </template>
          </a-button>
        </a-space>
      </template>
      <template #default>
        <div class="discover-card-content">
          <a-spin :loading="mvLoading">
            <a-row :gutter="10" style="justify-content: space-between; gap: 10px">
              <a-col :span="4.8" v-for="mv in mvList" :key="mv.mv_id">
                <div class="row-item">
                  <img
                      :style="{ width: '85px', height: '85px', transform: 'translateY(-20px)', 'object-fit': 'cover' }"
                      alt="dessert"
                      :src="mv.picurl"
                  />
                  <div class="row-item-meta">
                    <div class="row-item-meta-title">{{mv.mvtitle}}</div>
                    <div class="row-item-meta-description">
                      {{mv.singername}}
                    </div>
                  </div>
                </div>
              </a-col>
            </a-row>
          </a-spin>
        </div>
      </template>
    </Card>
  </div>

</template>

<script setup lang="ts">
import Carousel from "@/components/Carousel/Carousel.vue";
import {IconArrowLeft, IconArrowRight} from "@arco-design/web-vue/es/icon";
import {tab} from '@/types/common'
import {computed, ref} from "vue";
import useAppStore from "@/store";
import {storeToRefs} from "pinia";
import {useNewAlbum, useNewMv, useNewSong} from "@/hooks";

const appStore = useAppStore()
const {newSongType} = storeToRefs(appStore)
const menuTabs: tab[] = [
  {
    label: '最新',
  },
  {
    label: '内地',
  },
  {
    label: '港台',
  },
  {
    label: '欧美',
  },
  {
    label: '韩国',
  },
  {
    label: '日本',
  },
]

const selectTab = computed(() => {
  return (e: number) => menuTabs.find((tab, index) => index === e)
})
const onTabClick = (e: string) => {
  const num: number = Number(e) - 1
  newSongType.value = num + ''
  getNewSongList()
  getNewMvList()
  getAlbumList()
}

let {
  loading,
  newSongList,
  pageSize,
  currentPage,
  getNewSongList
} = useNewSong()
getNewSongList()

let {
  loading: albumLoading,
  albumList,
  num,
  getAlbumList
} = useNewAlbum()
getAlbumList()

let {
  loading: mvLoading,
  mvList,
  pageSize: mvPageSize,
  currentPage: mvCurrentPage,
  getNewMvList
} = useNewMv()
getNewMvList()

</script>

<style scoped lang="less">
.hot {
  height: 561px !important;
  background: #FFFFFF;
  box-shadow: 0 3px 7px 1px rgba(0, 0, 0, 0.05000000074505806);
  opacity: 1;
}

.discover {
  padding: 0 150px;
  .card-style();
}
</style>
