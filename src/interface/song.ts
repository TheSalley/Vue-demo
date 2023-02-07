export interface Song {
  id: number;
  name: string;
  mv: number;
  ar: Ar[];
  al: Al;
}

export interface SongUrl {
  id: number;
  url: string;
}

export interface Ar {
  id: number;
  name: string;
}

export interface Al {
  id: number;
  name: string;
  picUrl: string;
}
