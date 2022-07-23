import http from '../util'

// 不要在这里面手动添加api, 生成的api会覆盖
// 不要在这里面手动添加api, 生成的api会覆盖
// 不要在这里面手动添加api, 生成的api会覆盖

/** 获取榜单列表 */
function rank_category_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/rank/category`,
    params: opts,
  })
}
/** 获取热搜词 */
function search_hot_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/search/hot`,
    params: opts,
  })
}
/** register */
function auth_register_post (opts?: any) {
  return http.request({
    method: 'post',
    url: `/auth/register`,
    data: opts,
  })
}
/** 获取歌单分类 */
function songlist_category_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/songlist/category`,
    params: opts,
  })
}
/** 获取专辑信息 */
function album_albummid_get ({albummid, opts}: any) {
  return http.request({
    method: 'get',
    url: `/album/${albummid}`,
    params: opts,
  })
}
/** 播放链接 */
function song_url_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/song/url`,
    params: opts,
  })
}
/** login */
function auth_login_post (opts?: any) {
  return http.request({
    method: 'post',
    url: `/auth/login`,
    data: opts,
  })
}
/** 新 MV 推荐 */
function mv_new_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/mv/new`,
    params: opts,
  })
}
/** createSongList */
function user_create_songlist_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/user/create/songlist`,
    params: opts,
  })
}
/** 专辑歌单 */
function album_songs_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/album/songs`,
    params: opts,
  })
}
/** userBind */
function user_bind_post (opts?: any) {
  return http.request({
    method: 'post',
    url: `/user/bind`,
    data: opts,
  })
}
/** userDetail */
function user_detail_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/user/detail`,
    params: opts,
  })
}
/** 最新专辑 */
function album_new_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/album/new`,
    params: opts,
  })
}
/** 轮播图 */
function recommend_banner_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/recommend/banner`,
    params: opts,
  })
}
/** autocomplete */
function search_autocomplete_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/search/autocomplete`,
    params: opts,
  })
}
/** collectAlbum */
function user_collect_album_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/user/collect/album`,
    params: opts,
  })
}
/** 新歌推荐 */
function song_new_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/song/new`,
    params: opts,
  })
}
/** 根据分类获取歌单 */
function songlist_list_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/songlist/list`,
    params: opts,
  })
}
/** send */
function auth_send_post (opts?: any) {
  return http.request({
    method: 'post',
    url: `/auth/send`,
    data: opts,
  })
}
/** 获取榜单详情 */
function rank_id_get ({id, opts}: any) {
  return http.request({
    method: 'get',
    url: `/rank/${id}`,
    params: opts,
  })
}
/** collectSongList */
function user_collect_songlist_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/user/collect/songlist`,
    params: opts,
  })
}
/** 搜索 */
function search_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/search`,
    params: opts,
  })
}
/** 获取歌单详情 */
function songlist_id_get ({id, opts}: any) {
  return http.request({
    method: 'get',
    url: `/songlist/${id}`,
    params: opts,
  })
}
/** userCookie */
function user_cookie_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/user/cookie`,
    params: opts,
  })
}
/** userSetCookie */
function user_setCookie_post (opts?: any) {
  return http.request({
    method: 'post',
    url: `/user/setCookie`,
    data: opts,
  })
}
/** userCookie */
function user_getCookie_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/user/getCookie`,
    params: opts,
  })
}
export default {
  rank_category_get,
  search_hot_get,
  auth_register_post,
  songlist_category_get,
  album_albummid_get,
  song_url_get,
  auth_login_post,
  mv_new_get,
  user_create_songlist_get,
  album_songs_get,
  user_bind_post,
  user_detail_get,
  album_new_get,
  recommend_banner_get,
  search_autocomplete_get,
  user_collect_album_get,
  song_new_get,
  songlist_list_get,
  auth_send_post,
  rank_id_get,
  user_collect_songlist_get,
  search_get,
  songlist_id_get,
  user_cookie_get,
  user_setCookie_post,
  user_getCookie_get
}
