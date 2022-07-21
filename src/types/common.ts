export type tab = {
    label: string,
    children?: tab[]
}

export type image = {
    h5Url?: string,
    id: string,
    picUrl: string,
    type: string,
    typeStr?: string,
}

export declare interface NavItem {
    label: string,
    routeName: string,
}
