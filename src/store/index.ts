import {defineStore} from "pinia";
type tag = {
    allsorts?: [],
    categoryId?: number,
    categoryName?: string,
    usable?: number
}

const useAppStore = defineStore('appStore', {
    state: () => <{
        loginStatus: boolean,
        newSongType: string,
        currentTag: tag,
        currentRankId: number
    }
    >({
        loginStatus: false, // 登陆状态
        newSongType: '0', // 新歌分类
        currentTag: {
            categoryId: 10000000,
        }, // 当前选中的分类
        currentRankId: -1 // 当前排行榜类别
    }),

})

export default useAppStore
