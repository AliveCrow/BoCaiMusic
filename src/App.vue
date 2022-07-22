<template>
  <a-layout style="height: 400px;">
    <a-layout-header>
      <Nav />
    </a-layout-header>
    <a-layout-content>
      <router-view />
      <audio ref="playerAudio" class="player"></audio>
    </a-layout-content>
    <!--    <a-layout-footer>Footer</a-layout-footer>-->
  </a-layout>
  <PlayerSlider/>
</template>
<script setup>
import Nav from "@/components/Nav/Nav";
import {onMounted, ref} from "vue";
import usePlayer from "@/store/player";
import {PlayMode} from "@/types/song";
const playerAudio = ref(null)
const playerStore = usePlayer()
onMounted(() => {
  playerStore.audio = playerAudio.value
  playerStore.audio?.addEventListener('timeupdate', () => {
    playerStore.updateCurrentTime()
  })
  playerStore.audio?.addEventListener('ended', () => {
    if(playerStore.playMode === PlayMode.ONE_LOOP) {
      playerStore.setPlayingSong(playerStore.playList[playerStore.playingIndex])
      return
    }
    playerStore.next()
  })
})
</script>
<style lang="scss">
#app {
  font-family: Roboto-Medium, Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
