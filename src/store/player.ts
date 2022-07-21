import {defineStore} from "pinia";
import {PlayMode, PlayStatus, SongType} from "@/types/song";
import BoCaiMusic from "@/api/BoCaiMusic";

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
        playMode: PlayMode.ORDER,
        volume: 20,
        interval: 0,
        progress: 0,
        timer: null
    }),
    actions: {
        async setSongUrl(id: string) {
            const res = await BoCaiMusic.song_url_get({id})
            this.audio.src = res.data[id]
        },
        async setPlayingSong(songInfo: SongType) {
            await this.setSongUrl(songInfo.mid)
            this.progress = 0
            this.playing = songInfo
            this.interval = songInfo.interval
            this.addToPlayList(songInfo)
            this.play()
        },
        addToPlayList(songInfo: SongType | SongType[]) {
            let hasSong
            console.log(songInfo)
            if(Array.isArray(songInfo)) {
                hasSong = this.playList.filter(song => songInfo.find(r => r.id === song.id))
            } else {
                hasSong = this.playList.find(song => song.id === songInfo.id)
            }
            // todo
            console.log()
            if(hasSong && this.playList.length <= 0) {
                if (Array.isArray(songInfo)) {
                    this.playList.concat(songInfo)
                } else {
                    this.playList.push(songInfo)
                }
            }
        },
        removeFromPlayList(songMid: string) {
            const index = this.playList.findIndex(songInfo => songInfo.mid === songMid)
            this.playList.splice(index, 1)
        },
        setPlayStatus(status: PlayStatus) {
            this.playStatus = status
        },
        setPlayMode(mode: PlayMode) {
            this.playMode = mode
        },
        setVolume(volume: number) {
            this.volume = volume
        },
        updateProgress() {
            // this.progress = this.progress + 0.1
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
            console.log('pre')
            if(this.playingIndex <= 0) {
                await this.setPlayingSong(this.playList[this.playingIndex])
            } else {
                await this.setPlayingSong(this.playList[this.playingIndex - 1])
            }
        },
        async next() {
            console.log("next")
            console.log(this.playList)
            if(this.playingIndex <= 0) {
                await this.setPlayingSong(this.playList[this.playingIndex])
            } else {
                await this.setPlayingSong(this.playList[this.playingIndex + 1])
            }
        },
        // 当前播放时间
        updateCurrentTime() {
            this.progress = this.audio.currentTime
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
