<template>
  <div class="singer-view">
    <Card :headerStyle="{display: 'none'}"  class="singer-view-card">
      <a-space :size="103" >
        <div style="position: relative" >
          <a-avatar :size="197">Arco</a-avatar>
          <a-button class="play-btn" type="primary" shape="round">
            <template #icon>
              <icon-play-arrow-fill />
            </template>
            播放
          </a-button>
        </div>
        <a-typography-paragraph class="singer-view-desc">
          A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The verb to design expresses the process of developing a design. In some cases, the direct construction of an object without an explicit prior plan (such as in craftwork, some engineering, coding, and graphic design) may also be considered to be a design activity.
        </a-typography-paragraph>
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

</script>

<style scoped lang="less">
.singer-view {
  padding: 40px 150px;

  &-card {
    padding: 81px 91px;
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
