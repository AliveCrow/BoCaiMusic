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
        playMode: PlayMode.LOOP,
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
            let hasSong: SongType | undefined
            if(Array.isArray(songInfo)) {
                hasSong = this.playList.filter(song => songInfo.find(r => r.id === song.id))[0] || undefined
            } else {
                hasSong = this.playList.find(song => song.id === songInfo.id)
            }
            if (this.playList.length === 0) {
                if (Array.isArray(songInfo)) {
                    this.playList = songInfo.concat(this.playList)
                } else {
                    this.playList = [songInfo].concat(this.playList)
                }
                return
            }
            if (!hasSong) {
                if (Array.isArray(songInfo)) {
                    this.playList = songInfo.concat(this.playList)
                } else {
                    this.playList = [songInfo].concat(this.playList)
                }
            }
        },
        async removeFromPlayList(song: SongType) {
            const index = this.playList.findIndex(r => r.id === song.id)
            if(this.playStatus === PlayStatus.PLAYING) {
                await this.next()
            }
            this.playList.splice(index, 1)
        },
        setVolume(volume: number) {
            this.volume = volume
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
            const maxIndex = this.playList.length - 1
            const nextIndex = this.playingIndex + 1
            if (maxIndex >= nextIndex) { // 后面还有歌曲
                //todo 根据播放模式进行操作
                if (this.playingIndex <= 0) {
                    if (this.playList.length > 1) {
                        await this.setPlayingSong(this.playList[this.playingIndex + 1])
                    } else {
                        await this.setPlayingSong(this.playList[this.playingIndex])
                    }
                } else {
                    await this.setPlayingSong(this.playList[this.playingIndex + 1])
                }
            } else {
                await this.setPlayingSong(this.playList[0])
            }

        },
        // 当前播放时间
        updateCurrentTime() {
            this.progress = this.audio.currentTime
        },
        toggleVolume() {
            if (!this.volume) {
                const v = localStorage.getItem('volume') as never * 1 || 20
                this.volume = v
            } else {
                localStorage.setItem('volume', `${this.volume}`)
                this.volume = 0
                this.audio.mute = true
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
