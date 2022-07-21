import {ref} from "vue";


export default function useModal(t:string) {
    const visible = ref(false)
    const title = ref(t)
    const handleBeforeOk = (done:  (closed: boolean) => void, cb: (done: (closed: boolean) => void) => void) => {
        cb(done)
    }

    return {
        visible,
        title,
        handleBeforeOk
    }
}
