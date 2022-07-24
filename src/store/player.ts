import {defineStore} from "pinia";
import {PlayMode, PlayStatus, SongType} from "@/types/song";
import BoCaiMusic from "@/api/BoCaiMusic";
import {usePlayList} from "@/store/playList";

export const usePlayer = defineStore('player', {
    state: () => <{
        audio: HTMLAudioElement | any,
        playList: SongType[],
        playing: SongType | object,
        playStatus: PlayStatus,
        playMode: PlayMode,
        volume: number,
        interval: number,
        progress: number,
        timer: any
    }>({
        audio: null,
        playList: [],
        playing: {},
        playStatus: PlayStatus.PAUSED,
        playMode: PlayMode.LOOP,
        volume: 20,
        interval: 0,
        progress: 0,
        timer: null
    }),
    actions: {
        async setPlay(songInfo: SongType) {
            const res = await BoCaiMusic.song_url_get({id: songInfo.mid})
            this.progress = 0
            this.playing = songInfo
            this.playStatus = PlayStatus.PLAYING
            this.interval = songInfo.interval
            this.audio.currentTime = 0
            this.audio.src = res.data[songInfo.mid]
            this.audio.play()
        },
        setVolume(volume: number) {
            this.volume = volume
            this.audio.volume = volume/100
        },
        play() {
            this.audio.play()
            this.playStatus = PlayStatus.PLAYING
        },
        paused() {
            this.audio.pause()
            this.playStatus = PlayStatus.PAUSED
        },
        async pre() {
            const playListStore = usePlayList()
            const index = playListStore.playingSongIndex
            if(index === 0) {
                const prev = playListStore.list[0]
                await this.setPlay(prev)
            } else {
                const prev = playListStore.list[playListStore.playingSongIndex - 1]
                await this.setPlay(prev)
            }
        },
        async next() {
            const playListStore = usePlayList()
            const index = playListStore.playingSongIndex
            console.log(index)
            if(index === playListStore.list.length - 1) {
                const prev = playListStore.list[0]
                await this.setPlay(prev)
            } else {
                const prev = playListStore.list[index + 1]
                await this.setPlay(prev)
            }
        },
        // 当前播放时间
        updateCurrentTime() {
            this.progress = this.audio.currentTime
        },
        toggleVolume() {
            console.log('toggleVolume')
            if (!this.volume) {
                const v = localStorage.getItem('volume') as never * 1 || 20
                this.audio.muted = false
                this.volume = v
                this.audio.volume = v/100
            } else {
                localStorage.setItem('volume', `${this.volume}`)
                this.volume = 0
                this.audio.muted = true
            }
        },
        togglePlayMode() {
            if (PlayMode[this.playMode] === 'LOOP') {
                this.playMode = PlayMode.ONE_LOOP
                return
            }
            if (PlayMode[this.playMode] === 'ONE_LOOP') {
                this.playMode = PlayMode.LOOP
                return
            }
        }
    },
    getters:{
        playingIndex(): number {
            const songInfo = this.playing as SongType
            const list = this.playList as SongType[]
            return list.findIndex(song => song.id === songInfo.id)
        }
    }
})
export default usePlayer
