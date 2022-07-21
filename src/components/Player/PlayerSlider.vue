<template>
  <div id="drawer"></div>
  <a-drawer class="player-slider-drawer" :visible="visible" placement="bottom" :mask="false" :hide-cancel="true" :closable="false"
            :footer="false" :drawer-style="drawerStyle" popup-container="#drawer" >
    <div>
      <a-button type="primary" class="icon-up-btn-close" @click="handleToggleDrawer">
        <template #icon>
          <icon-down  />
        </template>
      </a-button>
      <div class="player-slider-line">
        <div class="time">{{getSongTime(playerStore.progress)}}</div>
        <a-slider v-model="vModelProgress" :max="playerStore.interval" :step="0.1" :show-text="false" @change="onProgressChange" />
        <div class="time">{{getSongTime(playerStore.interval)}}</div>
      </div>
      <div class="player-slider-control">
        <a-space :size="[40]">
          <icon-backward class="player-slider-icon" :size="iconSize" @click="playerStore.pre" />
          <icon-pause-circle class="player-slider-icon" @click="playerStore.paused" v-if="playerStore.playStatus==='PLAYING'" :size="iconSize"/>
          <icon-play-circle class="player-slider-icon" @click="playerStore.play" v-else :size="iconSize"/>
          <icon-forward class="player-slider-icon" @click="playerStore.next" :size="iconSize"/>
          <a-trigger trigger="click" :unmount-on-close="false">
            <icon-unordered-list class="player-slider-icon" :size="iconSize"/>
            <template #content>
              <div class="play-list-container">
                <a-list >
                  <a-list-item v-for="song in playerStore.playList" :key="song.id" class="list-wrapper" style="padding: 0 20px">
                    <a-list-item-meta :title="song.name">
                      <template #avatar>
                        <a-avatar shape="square">
                          <img alt="avatar" :src="`https://y.qq.com/music/photo_new/T002R300x300M000${song.album.mid}.jpg?max_age=2592000`" />
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                </a-list>
              </div>
            </template>
          </a-trigger>
          <a-dropdown position="tl" class="play-list" >
            <template #content>
              <a-doption v-for="song in playerStore.playList" :key="song.id"
              >
                {{ song.name }}
                <a-button type="text" shape="circle">
                  <icon-close />
                </a-button>
              </a-doption>
              <a-empty v-if="playerStore.playList.length <= 0" />
            </template>
          </a-dropdown>
        </a-space>
        <a-space :size="[40]">
          <a-avatar :size="90" shape="square">
            <a-image v-if="playerStore.playing.album"
                :src="`https://y.qq.com/music/photo_new/T002R300x300M000${playerStore.playing?.album?.mid}.jpg?max_age=2592000`"
            >
            </a-image>
          </a-avatar>
          <a-space direction="vertical">
            <div class="song-name">{{ playerStore.playing.name || '没有歌曲正在播放'}}</div>
            <div class="song-description">
              <span v-for="(singer, index) in playerStore.playing.singer" :key="singer.id">
                {{ singer.name }}{{ index + 1 === playerStore.playing.singer.length ? '' : ',' }}
              </span>
            </div>
          </a-space>
        </a-space>
        <a-space :size="[40]">
          <icon-mute-fill class="player-slider-icon" :size="iconSize"/>
          <a-slider class="player-slider-icon" :style="{width:'224px'}" v-model="volumeSlider" :max="100" :step="1"/>
          <!--          <a-progress class="player-slider-icon" :steps="100" :percent="playerStore.volume/ 100" :style="{width:'224px'}" :show-text="false"/>-->
          <!--          <icon-sound-fill class="player-slider-icon" :size="iconSize"/>-->
          <icon-sync v-if="playerStore.playMode === 'LOOP'" class="player-slider-icon" :size="iconSize"/>
          <icon-translate v-else-if="playerStore.playMode === 'ONE_LOOP'" class="player-slider-icon" :size="iconSize"/>
          <icon-refresh v-else-if="playerStore.playMode === 'ORDER'" class="player-slider-icon" :size="iconSize"/>
        </a-space>
      </div>
    </div>
  </a-drawer>
  <teleport to="body">
      <a-button type="primary" v-show="!visible" class="icon-up-btn-open" @click="handleToggleDrawer">
        <template #icon>
          <icon-up  />
        </template>
      </a-button>
  </teleport>
</template>

<script setup lang="ts">
import {
  IconBackward,
  IconDown,
  IconForward,
  IconMuteFill,
  IconPauseCircle,
  IconPlayCircle,
  IconRefresh,
  IconSync,
  IconTranslate,
  IconUnorderedList,
  IconUp,
  IconClose
} from "@arco-design/web-vue/es/icon";
import {computed, nextTick, onMounted, ref} from "vue";
import usePlayer from "@/store/player";
import {getSongTime} from "@/hooks/computed";
import player from "@/store/player";

const playerStore = usePlayer()

const iconSize = 25
const percent = ref(20.2)
const visible = ref(false)
const drawerStyle = {
  'boxShadow': '0px -3px 7px 1px rgba(0,0,0,0.05000000074505806)',
}

const handleToggleDrawer = () => {
  visible.value = !visible.value
}

const volumeSlider = computed({
  get() {
    return playerStore.volume
  },
  set(val: number) {
    playerStore.volume = val
  }
})
const vModelProgress = computed({
  get() {
    return playerStore.progress
  },
  set(val: number) {
    playerStore.progress = val
  }
})

const onProgressChange = (val: number) => {
  playerStore.audio.currentTime = val
}


</script>

<style lang="less">
.player-slider-drawer {
  .arco-drawer-body, .arco-drawer {
    overflow: visible !important;
  }
}

.play-list {
  min-width: 250px;
}
</style>

<style scoped lang="less">
#drawer {
  position: fixed;
  bottom: 0;
  width: 100%;
  /deep/ .arco-slider-bar {
    transition: all .15s linear;
  }
  /deep/.arco-slider-btn {
    display: none;
  }

  .player {
    width: 100%;
  }
}
.list-wrapper {
  transition: all .15s linear;
  &:hover {
    background-color: @theme-color !important;
    cursor: pointer;
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
    /deep/.arco-list-item-meta-title {
      color: #fff !important;
    }
  }
}
.play-list-container {
  padding: 10px;
  width: 300px;
  background-color: var(--color-bg-popup);
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}
.icon-up-btn-open {
  position: fixed !important;
  bottom: 0;
  right: 0;
  z-index: 99;
}
.icon-up-btn-close {
  position: absolute !important;
  top: -32px;
  right: 0;
}
.player-slider {
  position: fixed;
  bottom: 0;
  z-index: 99;

  width: 100%;
  height: 200px;
  background: #FFFFFF;
  box-shadow: 0 3px 7px 1px rgba(0, 0, 0, 0.05000000074505806);
  opacity: 1;





  .time {
    font-size: 16px;
    font-weight: 500;
    color: #808080;
    -webkit-background-clip: text;
  }

  &-line {
    display: flex;
    align-items: center;
    width: calc(100% - 300px);
    margin: 35px auto;
    gap: 40px;
  }

  &-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 300px);
    margin: 35px auto;
  }

  .song-name {
    height: 40px;
    font-size: 19px;
    font-weight: 500;
    color: #666666;
    line-height: 40px;
    -webkit-background-clip: text;
  }

  .song-description {
    height: 27px;
    font-size: 16px;
    font-weight: 500;
    color: #999999;
    line-height: 27px;
    -webkit-background-clip: text;
  }
}
.player-slider-icon {
  transition: all .1s linear;
}

.player-slider-icon:hover {
  color: @theme-color !important;
  transform: scale(1.03);
}
</style>
