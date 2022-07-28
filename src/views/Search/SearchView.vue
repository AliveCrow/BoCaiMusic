<template>
  <div class="search-view">
    <Card :headerStyle="{display: 'none'}"  class="search-view-card">
      <a-space :size="103" >
        <div style="position: relative" >
          <a-avatar :size="200" shape="square" style="background-color: transparent;color: #000">
            <a-typography-title :heading="2">{{route.query.keyword}}</a-typography-title>
          </a-avatar>
          <a-button class="play-btn" type="primary" shape="round">
            <template #icon>
              <icon-play-arrow-fill />
            </template>
            播放
          </a-button>
        </div>
      </a-space>
      <a-divider />
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

const route = useRoute()

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
