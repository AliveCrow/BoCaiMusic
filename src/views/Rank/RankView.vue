<template>
  <div class="rank-wrapper">
    <a-tabs type="card-gutter" class="tab-item" size="large" @change="onTabChange" >
      <a-tab-pane  v-for="(rank, index) in rankData" :key="index" :title="rank.title">
        <a-tabs position="left" @change="(e) => onSubTabChange(index, e)">
          <a-tab-pane v-for="item in rank.list" :key="item.topId" :title="item.label">
            <a-spin :loading="loading" style="width: 100%">
              <a-list :bordered="false" :max-height="540" @scroll="onScroll"  @reach-bottom="onReachBottom" >
                <a-list-item :class="[playerStore.playing.id===song.id?'is-playing': '']" v-for="song in rankSongList" :key="song.id" @click="handleSongClick(song)">
                  <a-list-item-meta :title="song.name" :description="song.singerName">
                    <template #avatar>
                      <a-avatar shape="square" :size="64">
                        <img alt="avatar" :src="song.cover || `https://y.qq.com/music/photo_new/T002R300x300M000${song.albumMid}.jpg?max_age=2592000`" />
                      </a-avatar>
                    </template>
                  </a-list-item-meta>
                </a-list-item>
              </a-list>
            </a-spin>
          </a-tab-pane>
        </a-tabs>

      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import {useRank} from "@/hooks";
import useAppStore from "@/store";
import {SongType} from "@/types/song";
import usePlayer from "@/store/player";
import {usePlayList} from "@/store/playList";

const appStore = useAppStore()
const playerStore = usePlayer()
const playListStore = usePlayList()
let {
  loading,
  currentPage,
  rankData,
  rankSongList,
  getRankData,
  getRankSongList
} = useRank()
getRankData()

const tabs = ref<any>({ "0": 62, "1": 5, "2": 28, "3": 108 })
appStore.currentRankId = tabs.value[0]

const onTabChange = (e) => {
  tabs.value[e] = tabs.value[e] || ''
  appStore.currentRankId = tabs.value[e]
}
const onSubTabChange = (index: number, e: number) => {
  tabs.value[index] = e
  appStore.currentRankId = e
}

watch(() => appStore.currentRankId, () => {
  getRankSongList()
}, {
  immediate: true
})

const isScroll = ref(false)
const onScroll = () => isScroll.value = true
const onReachBottom = () => {
  if(isScroll.value) {
    currentPage.value += 1
    getRankSongList(true)
  }

}

const handleSongClick = (e: SongType) => {
  playerStore.setPlay(e)
  playListStore.add(e)
}

</script>

<style scoped lang="less">
.rank-wrapper {
  padding: 40px 150px;

  /deep/ .arco-tabs-nav-tab-list {
    width: 160px;
    .arco-tabs-tab-title {
      font-family: Roboto-Bold, Roboto;
      -webkit-background-clip: text;
    }
  }
  /deep/ .arco-tabs-nav-vertical {
    min-height: 550px ;
  }
  .is-playing {
    /deep/.arco-list-item-meta-title {
      color: rgba(@theme-color, .6) !important;
    }
    /deep/.arco-list-item-meta-description {
      color: rgba(@theme-color, .6) !important;
    }
  }
}
</style>
