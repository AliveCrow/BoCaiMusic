<template>
  <div class="album-view">
    <Card :headerStyle="{display: 'none'}">
      <div class="album-wrapper">
        <a-space direction="vertical" align="center" :size="25">
          <a-image
              width="200"
              :src="dissInfo.logo"
          />
          <a-button  type="primary" class="play-btn" @click="play">
            <template #icon>
              <icon-play-arrow/>
            </template>
            <!-- Use the default slot to avoid extra spaces -->
            <template #default>播放全部</template>
          </a-button>
        </a-space>
        <a-space direction="vertical" style="flex: 1">
          <div class="album-name">{{ dissInfo.dissname }}</div>
          <a-typography-paragraph
              :ellipsis="{
                rows: 3,
                expandable: true,
              }"
              class="singer-name">
            <span v-html="dissInfo.desc" />
          </a-typography-paragraph>
          <a-list :hoverable="true">
            <a-list-item
                v-for="song in songList"
                :class="['list-item', playerStore.playing.mid === song.id?'is-playing':'']"
                :key="song.id"
                @click="handleListClick(song)"
            >
              <a-list-item-meta>
                <template #title>
                  <div class="song-list-item">
                    <div class="song-list-item-name">
                      <a-tooltip :content="inPlayList(song)?'从播放列表移除':'加入播放列表'">
                        <icon-minus-circle
                            v-if="inPlayList(song)"
                            :size="20"
                            class="add"
                            title="从播放列表删除"
                            alt="从播放列表删除"
                            @click.stop="playerStore.removeFromPlayList(song)"
                        />
                        <icon-plus-circle-fill
                            v-else
                            :size="20"
                            class="add"
                            @click.stop="playerStore.addToPlayList(song)"
                        />
                      </a-tooltip>
<!--                      <icon-play-circle-fill v-if="isPaused" class="play" :size="32"/>-->
<!--                      <icon-pause-circle-fill v-else class="pause" :size="32"/>-->
                      <span>{{ song.songname }}</span>
                    </div>
                    <span>{{ getSongTime(song.interval) }}</span>
                  </div>
                </template>
                <template #description>
                  <span class="song-list-singer" v-for="sing in song.singer" :key="sing.id">{{ sing.name }}</span>
                </template>
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </a-space>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import {IconPauseCircleFill, IconPlayArrow, IconPlayCircleFill, IconPlusCircleFill, IconMinusCircle} from "@arco-design/web-vue/es/icon";
import {useRoute} from "vue-router";
import {getSongTime} from "@/hooks/computed";
import {computed, ref} from "vue";
import {useSongList} from "@/hooks";
import usePlayer from "@/store/player";
import {SongListItem, SongType} from "@/types/song";

const route = useRoute()
const isPaused = ref(true)

const playerStore = usePlayer()
const {
  loading,
  dissInfo,
  songList,
  getSongList
} = useSongList()
getSongList(route.query.id as string)

const play = () => {
  playerStore.addToPlayList(songList.value)
  playerStore.setPlayingSong(songList.value[0])
}

const handleListClick = (r: SongType) => {
  playerStore.setPlayingSong(r)
}

const inPlayList = computed(() => {
  return (song: SongType) => {
    return playerStore.playList.findIndex(r => r.id === song.songid) !== -1
  }
})
</script>

<style scoped lang="less">

.album-view {

  padding: 40px 150px;

  .album-wrapper {
    padding: 53px;
    display: flex;
    gap: 40px;
    ///deep/ .arco-space-item,.arco-btn {
    //  width: 100%;
    //}
    /deep/ .arco-space-item, .play-btn {
      width: 100% !important;
    }

    .play-btn {
      height: 50px;
      opacity: 1;
    }

    .album-name {
      height: 40px;
      font-size: 32px;
      font-weight: 400;
      color: #4C4C4C;
      line-height: 40px;
      -webkit-background-clip: text;
    }

    .singer-name {
      font-size: 19px;
      font-weight: 500;
      color: #B3B3B3;
      line-height: 33px;
      -webkit-background-clip: text;
    }

    /deep/ .arco-list-item-meta-content {
      width: 100%;
    }

    .song-list-singer {
      color: #B3B3B3;
      font-size: 12px;
      margin-left: 40px;
    }

    .song-list-item {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .play, .pause, .add {
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
    .is-playing {
      span {
        color: rgba(@theme-color, .6) !important;
      }
    }
  }
}

</style>
