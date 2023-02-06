export interface TopListDetail {
  id: number;
  name: string;
  updateFrequency: string;
  updaeTime: number;
  coverImgUrl: string;
  playCount: number;
  tracks: TopListDetailTracks[];
}

export interface TopListDetailTracks {
  first: string;
  second: string;
}
