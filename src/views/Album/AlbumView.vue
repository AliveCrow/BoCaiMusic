<template>
  <div class="album-view">
    <Card :headerStyle="{display: 'none'}">
      <div class="album-wrapper">
        <a-space direction="vertical" align="center" :size="25">
          <a-image
              width="200"
              :src="albumInfo.picurl"
          />
          <a-button type="primary" class="play-btn">
            <template #icon>
              <icon-play-arrow/>
            </template>
            <!-- Use the default slot to avoid extra spaces -->
            <template #default>播放</template>
          </a-button>
        </a-space>
        <a-space direction="vertical" style="flex: 1">
          <div class="album-name">{{ albumInfo.name }}</div>
          <a-typography-paragraph
              :ellipsis="{
                rows: 3,
                expandable: true,
              }"
              class="singer-name">
            {{ albumInfo.desc }}
          </a-typography-paragraph>
          <a-list :hoverable="true">
            <a-list-item class="list-item" v-for="song in albumSongs" :key="song.id">
              <a-list-item-meta>
                <template #title>
                  <div class="song-list-item">
                    <div class="song-list-item-name">
                      <icon-play-circle-fill v-if="isPaused" class="play" :size="32"/>
                      <icon-pause-circle-fill v-else class="pause" :size="32"/>
                      <span>{{ song.title }}</span>
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
import {IconPauseCircleFill, IconPlayArrow, IconPlayCircleFill} from "@arco-design/web-vue/es/icon";
import {useRoute} from "vue-router";
import {useAblum} from "@/hooks";
import {getSongTime} from "@/hooks/computed";
import {ref} from "vue";

const route = useRoute()
const isPaused = ref(true)
const {
  loading,
  albumInfo,
  albumSongs,
  getAlbumInfo,
  getAlbumSongs,
} = useAblum()

getAlbumInfo(route.query.id as string).then(() => {
  getAlbumSongs(albumInfo.value.mid as string)
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
}

</style>
