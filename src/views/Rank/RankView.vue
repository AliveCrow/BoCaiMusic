<template>
  <div class="rank-wrapper">
    <a-tabs type="card-gutter" class="tab-item" size="large" >
      <a-tab-pane  v-for="(rank, index) in rankData" :key="index" :title="rank.title">

        <a-tabs position="left" @change="(e) => onSubTabChange(index, e)">
          <a-tab-pane v-for="item in rank.list" :key="item.topId" :title="item.label">
            <a-list :bordered="false" :max-height="550">
              <a-list-item v-for="song in rankSongList" :key="song.id">
                <a-list-item-meta title="item.meta" description="item.description">
                  <template #avatar>
                    <a-avatar shape="square" :size="64">
                      <img alt="avatar" src="https://markdown-image-space.liu-wb.com/image/house-plant-in-white-pot.jpg" />
                    </a-avatar>
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-tab-pane>
        </a-tabs>

      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {useRank} from "@/hooks";

let {
  loading,
  currentPage,
  rankData,
  rankSongList,
  getRankData,
  getRankSongList
} = useRank()
getRankData()

const onSubTabChange = (index: number, e: number) => {
  console.log('onSubTabChange', index, e)
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

}
</style>
