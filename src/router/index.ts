import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Discover/DiscoverView.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/Category/CategoryView.vue')
  },
  {
    path: '/rank',
    name: 'Rank',
    component: () => import('@/views/Rank/RankView.vue')
  },
  {
    path: '/album',
    name: 'Album',
    component: () => import('@/views/Album/AlbumView.vue')
  },
  {
    path: '/singer',
    name: 'Singer',
    component: () => import('@/views/Singer/SingerView.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('@/views/Mine/MineView.vue')
  },
  {
    path: '/songlist',
    name: 'SongList',
    component:  () => import('@/views/SongList/SongListView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
