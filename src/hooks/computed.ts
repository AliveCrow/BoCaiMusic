import {computed} from "vue";

export const getSongTime = (time: number) => {
    const integer = parseInt(String(time / 60))
    const decimal = time % 60
    return `${integer}:${decimal}`
}
