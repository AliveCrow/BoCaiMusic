import {ref} from "vue";
import BoCaiMusic from "@/api/BoCaiMusic";
import useAppStore from "@/store";
import {storeToRefs} from "pinia";
import {Message} from "@arco-design/web-vue";

const appStore = useAppStore()
const { newSongType, currentTag, currentRankId } = storeToRefs(appStore)

export function useNewSong() {
    const loading = ref(false)
    const newSongList = ref([])
    const pageSize = ref(12)
    const currentPage = ref(1)
    const getNewSongList = async () => {
        loading.value = true
        const res = await BoCaiMusic.song_new_get({
            type: newSongType.value,
            pageSize: pageSize.value,
            currentPage: currentPage.value

        })
        loading.value = false
        newSongList.value = res.data.list
    }
    return {
        loading,
        newSongList,
        pageSize,
        currentPage,
        getNewSongList
    }
}

export function useNewAlbum() {
    const loading = ref(false)
    const albumList = ref([])
    const num = ref(4)
    const getAlbumList = async () => {
        loading.value = true
        const res = await BoCaiMusic.album_new_get({
            type: newSongType.value === '0' ? '1' : newSongType.value,
            num: num.value
        })
        loading.value = false
        albumList.value = res.data.list
    }
    return {
        loading,
        albumList,
        num,
        getAlbumList
    }
}

export function useNewMv() {
    const loading = ref(false)
    const mvList = ref([])
    const pageSize = ref(16)
    const currentPage = ref(1)
    const getNewMvList = async () => {
        loading.value = true
        const res =await BoCaiMusic.mv_new_get({
            type: newSongType.value,
            pageSize: pageSize.value,
            currentPage: currentPage.value
        })
        loading.value = false
        mvList.value = res.data
    }
    return {
        loading,
        mvList,
        pageSize,
        currentPage,
        getNewMvList
    }
}

export function useCategory() {
    type tag = {
        allsorts?: [],
        categoryId: number,
        categoryName: string,
        usable: number
    }
    const categoryList = ref<tag[]>([])
    const dissList = ref([])
    const pageSize = ref(12)
    const currentPage = ref(1)
    const loading = ref(false)

    const getCategoryList = async () => {
        const localCategory = localStorage.getItem('local-category')
        if(!localCategory) {
            const res = await BoCaiMusic.songlist_category_get()
            categoryList.value = res.data
            localStorage.setItem('local-category', JSON.stringify(res.data))
        } else {
            categoryList.value = JSON.parse(localCategory)
            const res = await BoCaiMusic.songlist_category_get()
            categoryList.value = res.data
        }

    }
    const getSongListByCategoryId = async () => {
        loading.value = true
        const res = await BoCaiMusic.songlist_list_get({
            pageSize: pageSize.value,
            currentPage: currentPage.value,
            sort: 5,
            category: currentTag.value.categoryId
        })
        loading.value = false
        dissList.value = res.data.list
    }
    return {
        loading,
        pageSize,
        currentPage,
        dissList,
        categoryList,
        getCategoryList,
        getSongListByCategoryId
    }
}

export function useRank() {
    const loading = ref(false)
    const rankData = ref([])
    const currentPage = ref(1)
    const pageSize = ref(20)
    const getRankData = async () => {
        const res = await BoCaiMusic.rank_category_get({
            showDetail: 0
        })
        rankData.value = res.data
    }
    const rankSongList = ref([])
    const getRankSongList = async () => {
        loading.value = true
        try {
            const res = await BoCaiMusic.rank_id_get({
                id: currentRankId.value,
                currentPage: currentPage.value,
                pageSize: pageSize.value,
            })
            rankSongList.value = res.data.list
        } catch (e) {
            rankSongList.value = []
        }
        loading.value = false
    }
    return {
        loading,
        currentPage,
        pageSize,
        rankData,
        rankSongList,
        getRankData,
        getRankSongList
    }
}
