import {computed, ref} from "vue";
import {DROPDOWN_LIST} from "@/constants/Nav";
import useAppStore from "@/store";

/**
 * 获取歌曲时间 mm:ss
 * @param time
 */
export const getSongTime = (time: number) => {
    const integer = parseInt((time / 60).toFixed(2))
    const decimal = parseInt((time % 60).toFixed(2))
    const i = integer > 10 ? integer : `0${integer}`
    const d = decimal > 10 ? decimal : `0${decimal}`
    if(!integer && !decimal) {
        return '00:00'
    }
    return `${i}:${d}`
}

export const dropdownList = computed(() => {
    return (loginStatus: boolean) => {
        const appStore = useAppStore()
        if (loginStatus) {
            return DROPDOWN_LIST.map(r => {
                return {
                    label: r.label,
                    name: r.name,
                    disabled: appStore.loginStatus ? !r.disabled : r.disabled
                }
            })
        } else {
            return DROPDOWN_LIST
        }
    }
})
