import {onMounted} from "vue";
import {PlayMode} from "@/types/song";
import usePlayer from "@/store/player";
import {usePlayList} from "@/store/playList";


export function initPlayer(audioElement: HTMLAudioElement) {
    const playerStore = usePlayer()
    const playListStore = usePlayList()
    playerStore.audio = audioElement
    playerStore.audio?.addEventListener('timeupdate', () => {
        playerStore.updateCurrentTime()
    })
    playerStore.audio?.addEventListener('ended', () => {
        if (playerStore.playMode === PlayMode.ONE_LOOP) {
            playerStore.setPlay(playListStore.list[playListStore.playingSongIndex])
            return
        }
        playerStore.next()
    })
}
