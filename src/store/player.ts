import {defineStore} from "pinia";
import useAppStore from "@/store/index";

export const usePlayer = defineStore('player', {
    state: () => ({
        playList: [],
        playing: {},
        playStatus: 'paused',
        playMode: 'order',
        volume: 0
        // order
        // one loop
        //loop
    })
})
export default usePlayer
