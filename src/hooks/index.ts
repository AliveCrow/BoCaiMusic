import {ref} from "vue";
import BoCaiMusic from "@/api/BoCaiMusic";
import useAppStore from "@/store";
import {storeToRefs} from "pinia";
import {SongListItem, SongType} from "@/types/song";

const appStore = useAppStore()
const { newSongType, currentTag, currentRankId } = storeToRefs(appStore)

export function useNewSong() {
    const loading = ref(false)
    const newSongList = ref([])
    const pageSize = ref(12)
    const total = ref(0)
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
        total.value = res.data.total
    }
    const handleSongNextPage = async () => {
        currentPage.value += 1
        await getNewSongList()
    }
    const handleSongPrePage = async () => {
        currentPage.value -= 1
        await getNewSongList()
    }
    return {
        loading,
        newSongList,
        pageSize,
        total,
        currentPage,
        getNewSongList,
        handleSongNextPage,
        handleSongPrePage
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
    const total = ref(0)
    const currentPage = ref(1)
    const getNewMvList = async () => {
        loading.value = true
        const res = await BoCaiMusic.mv_new_get({
            type: newSongType.value,
            pageSize: pageSize.value,
            currentPage: currentPage.value
        })
        loading.value = false
        mvList.value = res.data.list
        total.value = res.data.total
    }
    const handleMvPrePage = async () => {
        currentPage.value -= 1
        await getNewMvList()
    }
    const handleMvNextPage = async () => {
        currentPage.value += 1
        await getNewMvList()
    }
    return {
        loading,
        mvList,
        total,
        pageSize,
        currentPage,
        getNewMvList,
        handleMvPrePage,
        handleMvNextPage
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
    const total = ref(0)
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
            localStorage.setItem('local-category', JSON.stringify(res.data))
            total.value = res.data.length
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
        total.value = res.data.total
    }
    const handleNextPage = async () => {
        currentPage.value += 1
        await getSongListByCategoryId()
    }
    const handlePrePage = async () => {
        currentPage.value -= 1
        await getSongListByCategoryId()
    }
    return {
        loading,
        pageSize,
        currentPage,
        total,
        dissList,
        categoryList,
        getCategoryList,
        getSongListByCategoryId,
        handleNextPage,
        handlePrePage
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
    const getRankSongList = async (pageChange: boolean | undefined = false) => {
        if (!pageChange) {
            currentPage.value = 1
        }
        loading.value = true
        try {
            const res = await BoCaiMusic.rank_id_get({
                id: currentRankId.value,
                opts: {
                    currentPage: currentPage.value,
                    pageSize: pageSize.value,
                }
            })
            if (pageChange) {
                rankSongList.value = rankSongList.value.concat(res.data.list)
            } else {
                rankSongList.value = res.data.list
            }
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

export function useAblum() {
    const loading = ref(false)
    const albumInfo = ref({})
    const albumSongs = ref([])
    const getAlbumInfo = async (albummid: string) => {
        const res = await BoCaiMusic.album_albummid_get({albummid})
        albumInfo.value = res.data
    }
    const getAlbumSongs = async (albummid: string) => {
        const res = await BoCaiMusic.album_songs_get({albummid})
        albumSongs.value = res.data.list
    }

    return {
        loading,
        albumInfo,
        albumSongs,
        getAlbumInfo,
        getAlbumSongs,
    }
}

export function useSongList() {
    const loading = ref(false)
    const dissInfo = ref({})
    const songList = ref<SongType[]>([])
    const getSongList = async (id: string) => {
        const res = await BoCaiMusic.songlist_id_get({id})
        dissInfo.value = res.data
        songList.value = res.data.songlist.map((r: SongListItem) => {
            return {
                ...r,
                id: r.songid,
                mid: r.songmid,
                name: r.songname,
                title: r.songname,
                album: {
                    id: r.albummid,
                    mid: r.albummid,
                    name: r.albumname,
                }
            }
        })
    }

    return {
        loading,
        dissInfo,
        songList,
        getSongList
    }
}
