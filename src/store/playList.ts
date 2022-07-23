import {defineStore} from "pinia";
import {SongType} from "@/types/song";
import usePlayer from "@/store/player";


export const usePlayList = defineStore('playList', {
    state: () => <{
        list: SongType[]
    }>({
        list: []
    }),
    actions: {
        /* 添加到播放列表-单首 */
        add(song: SongType) {
            if (this.songHasInList(song)) return
            this.list = [song].concat(this.list)
        },
        /* 添加到播放列表-多首 */
        multipleAdd(payload: SongType[]) {
            this.list = payload
        },
        /* 从播放列表删除 */
        remove(song: SongType) {
            this.list.splice(this.selectSongIndex(song), 1)
        },
        /* 清空播放列表 */
        clear() {
            console.log('clear')
        },
        /* 播放选中到歌曲  */
        play() {
            console.log('play')
        },
    },
    getters: {
        /*歌曲是否已经在播放列表中*/
        songHasInList() {
            return (song: SongType) => this.list.some(item => item.id === song.id)
        },
        /*正在播放的歌曲索引*/
        playingSongIndex(): number {
            const playerStore = usePlayer()
            return this.list.findIndex(item => item.id === (playerStore.playing as SongType).id)
        },
        /*选择的歌曲的索引*/
        selectSongIndex(): (song: SongType) => number {
            return (song: SongType) => this.list.findIndex(item => item.id === song.id)
        }
    }
})
