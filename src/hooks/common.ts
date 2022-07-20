import {RouteLocationNamedRaw, Router} from "vue-router";

// 导航到专辑页
export async function navigateToAlbum(router: Router, opts: RouteLocationNamedRaw) {
    await router.push({
        name: 'Album',
        ...opts
    })
}
