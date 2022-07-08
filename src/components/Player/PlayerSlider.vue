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
        <div class="time">00:00</div>
        <a-slider v-model="percent" :max="100" :step="0.1" :show-text="false"/>
        <div class="time">15:12</div>
      </div>
      <div class="player-slider-control">
        <a-space :size="[40]">
          <icon-backward class="player-slider-icon" :size="iconSize"/>
          <icon-pause-circle class="player-slider-icon" v-if="true" :size="iconSize"/>
          <icon-play-circle class="player-slider-icon" v-else :size="iconSize"/>
          <icon-forward class="player-slider-icon" :size="iconSize"/>
          <a-dropdown position="tl">
            <icon-unordered-list class="player-slider-icon" :size="iconSize"/>
            <template #content>
              <a-doption>Option 1Option 1Option 1Option 1Option 1Option 1</a-doption>
              <a-doption>OpOption 1Option 1tion 1</a-doption>
              <a-doption>Option 1</a-doption>
              <a-doption>OptOption 1Option 1Option 1ion 1</a-doption>
              <a-doption>OptOption 1Option 1Option 1ion 1</a-doption>
              <a-doption>Option 1</a-doption>
              <a-doption>Option 1</a-doption>
            </template>
          </a-dropdown>
        </a-space>
        <a-space :size="[40]">
          <a-avatar :size="90" shape="square">Arco</a-avatar>
          <a-space direction="vertical">
            <div class="song-name">The Basics Of Buying</div>
            <div class="song-description">Name Group</div>
          </a-space>
        </a-space>
        <a-space :size="[40]">
          <icon-mute-fill class="player-slider-icon" :size="iconSize"/>
          <a-progress class="player-slider-icon" :percent="0.2" :style="{width:'224px'}" :show-text="false"/>
          <icon-sound-fill class="player-slider-icon" :size="iconSize"/>
          <icon-sync v-if="true" class="player-slider-icon" :size="iconSize"/>
          <icon-translate v-else class="player-slider-icon" :size="iconSize"/>
          <icon-refresh class="player-slider-icon" :size="iconSize"/>
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
  IconForward,
  IconMuteFill,
  IconPauseCircle,
  IconPlayCircle,
  IconRefresh,
  IconSoundFill,
  IconSync,
  IconTranslate,
  IconUnorderedList,
  IconUp,
  IconDown,
} from "@arco-design/web-vue/es/icon";
import {ref} from "vue";

const iconSize = 25
const percent = ref(20.2)
const visible = ref(false)
const drawerStyle = {
  'boxShadow': '0px -3px 7px 1px rgba(0,0,0,0.05000000074505806)',
}

const handleToggleDrawer = () => {
  visible.value = !visible.value
}

</script>

<style lang="less">
.player-slider-drawer{
  .arco-drawer-body,.arco-drawer {
    overflow: visible !important;
  }
}
</style>

<style scoped lang="less">
#drawer {
  position: fixed;
  bottom: 0;
  width: 100%;
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



  .player-slider-icon {
    transition: all .1s linear;
  }

  .player-slider-icon:hover {
    color: @theme-color !important;
    transform: scale(1.05);
  }

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

</style>
