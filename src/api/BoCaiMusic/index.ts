import http from '../util'

// 不要在这里面手动添加api, 生成的api会覆盖
// 不要在这里面手动添加api, 生成的api会覆盖
// 不要在这里面手动添加api, 生成的api会覆盖

/** userBind */
function user_bind_post (opts?: any) {
  return http.request({
    method: 'post',
    url: `/user/bind`,
    data: opts,
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
/** rankCategory */
function rank_category_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/rank/category`,
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
/** login */
function auth_login_post (opts?: any) {
  return http.request({
    method: 'post',
    url: `/auth/login`,
    data: opts,
  })
}
/** userBind */
function user_bind_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/user/bind`,
    params: opts,
  })
}
/** rankById */
function rank_id_get ({id, opts}: any) {
  return http.request({
    method: 'get',
    url: `/rank/${id}`,
    params: opts,
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
/** albumNew */
function album_new_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/album/new`,
    params: opts,
  })
}
/** songNew */
function song_new_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/song/new`,
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
/** collectSongList */
function user_collect_songlist_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/user/collect/songlist`,
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
/** mvNew */
function mv_new_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/mv/new`,
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
/** songlistList */
function songlist_list_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/songlist/list`,
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
/** banner */
function recommend_banner_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/recommend/banner`,
    params: opts,
  })
}
/** songlistById */
function songlist_id_get ({id, opts}: any) {
  return http.request({
    method: 'get',
    url: `/songlist/${id}`,
    params: opts,
  })
}
/** songlistCategory */
function songlist_category_get (opts?: any) {
  return http.request({
    method: 'get',
    url: `/songlist/category`,
    params: opts,
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
export default {
  user_bind_post,
  auth_send_post,
  rank_category_get,
  user_collect_album_get,
  auth_login_post,
  user_bind_get,
  rank_id_get,
  user_getCookie_get,
  album_new_get,
  song_new_get,
  user_cookie_get,
  user_collect_songlist_get,
  user_create_songlist_get,
  mv_new_get,
  auth_register_post,
  songlist_list_get,
  user_setCookie_post,
  recommend_banner_get,
  songlist_id_get,
  songlist_category_get,
  user_detail_get
}
