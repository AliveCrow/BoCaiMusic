<template>
  <div class="search-view">
    <Card :headerStyle="{display: 'none'}"  class="search-view-card">
      <a-space :size="103" >
        <div style="position: relative" >
          <a-avatar :size="200" shape="square" style="background-color: transparent;color: #000">
            <a-typography-title :heading="2">{{`"${route.query.keyword}"的搜索结果`}}</a-typography-title>
          </a-avatar>
          <a-button class="play-btn" type="primary" shape="round">
            <template #icon>
              <icon-play-arrow-fill />
            </template>
            播放
          </a-button>
        </div>
      </a-space>
      <a-tabs default-active-key="2" type="card-gutter">
        <a-tab-pane v-for="item in TABS"  :key="item.label" :title="item.label">
         {{item}}
        </a-tab-pane>
      </a-tabs>
      <a-list>
        <a-list-item class="list-item">
          <a-list-item-meta>
            <template #title>
              <div class="song-list-item">
                <div class="song-list-item-name">
                  <icon-play-circle-fill class="play" :size="32"/>
                  <icon-pause-circle-fill class="pause" :size="32"/>
                  <span>The Weeknd – Real Life</span>
                </div>
                <span>04:34</span>
              </div>
            </template>
          </a-list-item-meta>
        </a-list-item>
        <a-list-item class="list-item">
          <a-list-item-meta>
            <template #title>
              <div class="song-list-item">
                <div class="song-list-item-name">
                  <icon-play-circle-fill class="play" :size="32"/>
                  <icon-pause-circle-fill class="pause" :size="32"/>
                  <span>The Weeknd – Real Life</span>
                </div>
                <span>04:34</span>
              </div>
            </template>
          </a-list-item-meta>
        </a-list-item>
        <a-list-item class="list-item">
          <a-list-item-meta>
            <template #title>
              <div class="song-list-item">
                <div class="song-list-item-name">
                  <icon-play-circle-fill class="play" :size="32"/>
                  <icon-pause-circle-fill class="pause" :size="32"/>
                  <span>The Weeknd – Real Life</span>
                </div>
                <span>04:34</span>
              </div>
            </template>
          </a-list-item-meta>
        </a-list-item>
        <a-list-item class="list-item">
          <a-list-item-meta>
            <template #title>
              <div class="song-list-item">
                <div class="song-list-item-name">
                  <icon-play-circle-fill class="play" :size="32"/>
                  <icon-pause-circle-fill class="pause" :size="32"/>
                  <span>The Weeknd – Real Life</span>
                </div>
                <span>04:34</span>
              </div>
            </template>
          </a-list-item-meta>
        </a-list-item>
        <a-list-item class="list-item">
          <a-list-item-meta>
            <template #title>
              <div class="song-list-item">
                <div class="song-list-item-name">
                  <icon-play-circle-fill class="play" :size="32"/>
                  <icon-pause-circle-fill class="pause" :size="32"/>
                  <span>The Weeknd – Real Life</span>
                </div>
                <span>04:34</span>
              </div>
            </template>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item class="list-item">
          <a-list-item-meta>
            <template #title>
              <div class="song-list-item">
                <div class="song-list-item-name">
                  <icon-play-circle-fill class="play" :size="32"/>
                  <icon-pause-circle-fill class="pause" :size="32"/>
                  <span>The Weeknd – Real Life</span>
                </div>
                <span>04:34</span>
              </div>
            </template>
          </a-list-item-meta>
        </a-list-item>
        <a-list-item class="list-item">
          <a-list-item-meta>
            <template #title>
              <div class="song-list-item">
                <div class="song-list-item-name">
                  <icon-play-circle-fill class="play" :size="32"/>
                  <icon-pause-circle-fill class="pause" :size="32"/>
                  <span>The Weeknd – Real Life</span>
                </div>
                <span>04:34</span>
              </div>
            </template>
          </a-list-item-meta>
        </a-list-item>
        <a-list-item class="list-item">
          <a-list-item-meta>
            <template #title>
              <div class="song-list-item">
                <div class="song-list-item-name">
                  <icon-play-circle-fill class="play" :size="32"/>
                  <icon-pause-circle-fill class="pause" :size="32"/>
                  <span>The Weeknd – Real Life</span>
                </div>
                <span>04:34</span>
              </div>
            </template>
          </a-list-item-meta>
        </a-list-item>
        <a-list-item class="list-item">
          <a-list-item-meta>
            <template #title>
              <div class="song-list-item">
                <div class="song-list-item-name">
                  <icon-play-circle-fill class="play" :size="32"/>
                  <icon-pause-circle-fill class="pause" :size="32"/>
                  <span>The Weeknd – Real Life</span>
                </div>
                <span>04:34</span>
              </div>
            </template>
          </a-list-item-meta>
        </a-list-item>
        <a-list-item class="list-item">
          <a-list-item-meta>
            <template #title>
              <div class="song-list-item">
                <div class="song-list-item-name">
                  <icon-play-circle-fill class="play" :size="32"/>
                  <icon-pause-circle-fill class="pause" :size="32"/>
                  <span>The Weeknd – Real Life</span>
                </div>
                <span>04:34</span>
              </div>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </Card>
  </div>
</template>

<script setup lang="ts">
import {IconPauseCircleFill, IconPlayArrowFill, IconPlayCircleFill} from "@arco-design/web-vue/es/icon";
import {useRoute} from "vue-router";

enum SEARCH_TYPE {
  "ALBUM" = 0,
  "MV" = 1,
  "SINGER" = 2,
  "SONG" = 3,
}
const TABS = [
    {label: "单曲", value: 3},
    {label: "歌手", value: 2},
    {label: "专辑", value: 0},
    {label: "MV", value: 1},
]

const route = useRoute()

console.log(route)

</script>

<style scoped lang="less">
.search-view {
  padding: 40px 150px;

  &-card {
    padding: 0 91px 81px;
  }

  &-desc {
    font-size: 17px;
    font-weight: 500;
    color: #808080;
    line-height: 40px;
    -webkit-background-clip: text;
  }

  .play-btn {
    position: absolute;
    right: 0;
    bottom: 13px
  }

  .song-list-item {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .play, .pause {
      color: #808080 !important;
      transition: all .15s ease-in-out;
      &:hover {
        color: @theme-color !important;
      }
    }

    &-name {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    span {
      height: 27px;
      font-weight: 500;
      color: #808080;
      line-height: 27px;
      -webkit-background-clip: text;
    }
  }
}
</style>
