export interface SongType {
    id: number;
    type: number;
    mid: string;
    name: string;
    title: string;
    subtitle: string;
    singer: Singer[];
    album: Album;
    mv?: Mv;
    interval: number;
    isonly: number;
    language: number;
    genre: number;
    index_cd: number;
    index_album: number;
    time_public: string;
    status: number;
    fnote: number;
    file: File;
    pay: Pay;
    action: Action;
    ksong: Ksong;
    volume: Volume;
    label: string;
    url: string;
    bpm: number;
    version: number;
    trace: string;
    data_type: number;
    modify_stamp: number;
    pingpong: string;
    aid: number;
    ppurl: string;
    tid: number;
    ov: number;
    sa: number;
    es: string;
    vs: string[];
    vi: any[];
    ktag: string;
}

interface Volume {
    gain: number;
    peak: number;
    lra: number;
}

interface Ksong {
    id: number;
    mid: string;
}

interface Action {
    switch: number;
    msgid: number;
    alert: number;
    icons: number;
    msgshare: number;
    msgfav: number;
    msgdown: number;
    msgpay: number;
    switch2: number;
    icon2: number;
}

interface Pay {
    pay_month: number;
    price_track: number;
    price_album: number;
    pay_play: number;
    pay_down: number;
    pay_status: number;
    time_free: number;
}

interface File {
    media_mid: string;
    size_24aac: number;
    size_48aac: number;
    size_96aac: number;
    size_192ogg: number;
    size_192aac: number;
    size_128mp3: number;
    size_320mp3: number;
    size_ape: number;
    size_flac: number;
    size_dts: number;
    size_try: number;
    try_begin: number;
    try_end: number;
    url: string;
    size_hires: number;
    hires_sample: number;
    hires_bitdepth: number;
    b_30s: number;
    e_30s: number;
    size_96ogg: number;
    size_360ra: any[];
    size_dolby: number;
}

interface Mv {
    id: number;
    vid: string;
    name: string;
    title: string;
    vt: number;
}

interface Album {
    id: number;
    mid: string;
    name: string;
    title?: string;
    subtitle?: string;
    time_public?: string;
    pmid?: string;
}

interface Singer {
    id: number;
    mid: string;
    name: string;
    title: string;
    type: number;
    uin: number;
    pmid: string;
}

export enum PlayStatus {
    PLAYING = 'PLAYING',
    PAUSED = 'PAUSED'
}

// order
// one loop
//loop
export enum PlayMode {
    LOOP = 'LOOP',
    ONE_LOOP = 'ONE_LOOP',
}


export interface SongListItem {
    albumdesc: string;
    albumid: number;
    albummid: string;
    albumname: string;
    alertid: number;
    belongCD: number;
    cdIdx: number;
    interval: number;
    isonly: number;
    label: string;
    msgid: number;
    pay: SongListItemPay;
    preview: Preview;
    rate: number;
    singer: SongListItemSinger[];
    size128: number;
    size320: number;
    size5_1: number;
    sizeape: number;
    sizeflac: number;
    sizeogg: number;
    songid: number;
    songmid: string;
    songname: string;
    songorig: string;
    songtype: number;
    strMediaMid: string;
    stream: number;
    switch: number;
    type: number;
    vid: string;
}
interface SongListItemSinger {
    id: number;
    mid: string;
    name: string;
}
interface Preview {
    trybegin: number;
    tryend: number;
    trysize: number;
}
interface SongListItemPay {
    payalbum: number;
    payalbumprice: number;
    paydownload: number;
    payinfo: number;
    payplay: number;
    paytrackmouth: number;
    paytrackprice: number;
    timefree: number;
}
