
export function debounce(fun: any, delay: number) {

    return (args: any) => {
        const _args = args
        clearTimeout(fun.id)
        fun.id = setTimeout(function () {
            fun(_args)
        }, delay)
    }
}
