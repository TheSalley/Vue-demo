/**
 * @description 热门搜索
 */
export interface SearchHotDetail {
  searchWord: string;
  score: number;
  content: string;
  source: number;
  iconType: number;
  iconUrl?: string;
  url?: string;
  alg: string;
}

/**
 * @description 关键字搜索
 */
export interface SearchSuggest {
  albums: Album[];
  artists: Artist[];
  songs: Songs[];
  playlists: playLists[];
  order: string[];
}

/**
 * @description 专辑 Album
 */
export interface Album {
  id: number;
  name: string;
  artist: Artist;
  publishTime: number;
  size: number;
  copyrightId: number;
  status: number;
  picId: number;
  alia: string[];
  mark: number;
}

/**
 * @description 歌手 Artist
 */
export interface Artist {
  id: number;
  name: string;
  picUrl: string;
  alias: string[];
  albumSize: number;
  picId: number;
  img1v1Url: string;
  img1v1: number;
  trans?: any;
  fansGroup: any;
}

/**
 * @description 歌曲
 */
export interface Songs {
  id: number;
  name: string;
  artists: Artist[];
  album: Album;
  duration: number;
  copyrightId: number;
  status: number;
  alias: string[];
  rtype: number;
  ftype: number;
  transNames: string[];
  mvid: number;
  fee: number;
  rUrl?: any;
  mark: number;
}

/**
 * @description 播放列表
 */
export interface playLists {
  id: number;
  name: string;
  coverImgUrl: string
  creator: any
  trackCount: number
  userId: number
  playCount: number
  bookCount: number
  specialType: number
  description: string
  highQuality: boolean
}
