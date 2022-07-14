import {defineStore} from "pinia";

const useAppStore = defineStore('appStore', {
    state: () => ({
        loginStatus: false, // 登陆状态
    })
})

export default useAppStore
