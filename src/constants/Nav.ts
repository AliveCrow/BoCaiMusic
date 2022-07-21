import {NavItem} from "@/types/common";

export const NAV: NavItem[] = [
    {
        label: '发现',
        routeName: 'Home'
    },
    {
        label: '分类',
        routeName: 'Category'
    },
    {
        label: '排行榜',
        routeName: 'Rank'
    }
]

export const DROPDOWN_LIST = [
    {
        label: '登陆',
        name: 'Login',
        disabled: false
    },
    {
        label: '主页',
        name: 'Mine',
        disabled: true
    },
    {
        label: '退出登陆',
        name: 'LogOut',
        disabled: true
    }
]
