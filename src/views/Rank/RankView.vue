<template>
  <div class="rank-wrapper">
    <a-collapse  accordion expand-icon-position="right" @change="onCollapseChange">
      <a-collapse-item v-for="item in rankData" :header="item.title" :key="item.title">
        <Card class="card" :header-style="{ display: 'none'}">
          <template>
            <a-tabs position="left"  @tab-click="handleClickTab">
              <a-tab-pane v-for="_item in item.list" :key="_item.topId" :title="_item.label"  >
                <a-spin :loading="loading" >
                  <a-list :bordered="false" :max-height="650" @reach-bottom="fetchData">
                    <a-list-item v-for="song in rankSongList" :key="song.id">
                      <a-list-item-meta :title="song.name"
                                        :description="song.title"
                      >
                        <template #avatar>
                          <a-avatar shape="square" :size="64">
                            <img alt="avatar"
                                 :src="`https://y.qq.com/music/photo_new/T002R300x300M000${song.album.mid}.jpg?max_age=2592000`"/>
                          </a-avatar>
                        </template>
                      </a-list-item-meta>
                    </a-list-item>
                    <template #scroll-loading>
                      <div v-if="bottom || rankSongList.length <= 0">没有数据</div>
                      <a-spin v-else />
                    </template>
                  </a-list>
                </a-spin>
              </a-tab-pane>
            </a-tabs>
          </template>
        </Card>
      </a-collapse-item>
    </a-collapse>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRank} from "@/hooks";
import useAppStore from "@/store";
import {storeToRefs} from "pinia";

const appStore = useAppStore()
const {currentRankId} = storeToRefs(appStore)
const bottom = ref(false)
const fetchData = () => {
  console.log('fetchData')
  bottom.value = false
  // currentPage.value ++
  // getRankSongList()
}

const onCollapseChange = (e) => {
  console.log(e)
  if(e[0]) {
    const item = rankData.value.find(r => r.title === e[0]) as any
    currentRankId.value = item.list[0].topId
    getRankSongList()
  }

}

let {
  loading,
  currentPage,
  rankData,
  rankSongList,
  getRankData,
  getRankSongList
} = useRank()
getRankData()

const handleClickTab = (e) => {

  currentRankId.value = e
  getRankSongList()
}
</script>

<style scoped lang="less">
@text-color: #666;
@icon-color: #808080;
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rank-wrapper {
  padding: 40px 150px;

  .card {
    margin-bottom: 40px;
  }

  /deep/ .arco-spin {
    width: 100%;
  }

  /deep/.arco-collapse-item-header {
    height: 95px;
    .arco-collapse-item-header-title {
      font-size: 19px;
      font-weight: 500;
      color: #666666;
      line-height: 40px;
      -webkit-background-clip: text;
    }
  }

  /deep/.arco-card-body {
    padding: 0
  }

  /deep/ .arco-tabs-nav-tab-list {
    min-height: 650px;
  }

  /deep/ .arco-tabs-tab {
    text-align: right;
  }

  /deep/.arco-tabs-content {
    padding-left: 0
  }

  /deep/ .arco-tabs-tab-title {
    font-weight: 500;
    color: #999999;
    line-height: 40px;
    -webkit-background-clip: text;
  }

  /deep/ .arco-tabs-tab-active {
    .arco-tabs-tab-title {
      color: @theme-color !important;
    }
  }

  .card-title {
    font-size: 21px;
    font-weight: 500;
    color: #666666;
    line-height: 40px;
    -webkit-background-clip: text;
  }

  .card-icon {
    color: @icon-color;
  }
}

</style>
