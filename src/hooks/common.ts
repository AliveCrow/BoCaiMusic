import {RouteLocationNamedRaw, RouteLocationPathRaw, Router} from "vue-router";
import { NavItem } from '@/types/common'

type navigateOpts = RouteLocationPathRaw | RouteLocationNamedRaw

// 导航到专辑页
export async function navigateToAlbum(router: Router, opts: navigateOpts) {
    await router.push({
        name: 'Album',
        ...opts
    })
}

export async function navigateTo(router: Router, opts: navigateOpts | string) {
    await router.push(opts)
}
