export interface Personalized {
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
}

export interface PersonalizedNewSong {
  id: number;
  name: string;
  picUrl: string;
  song: PNSSong;
}

export interface PNSSong {
  id: number;
  artists: PNSSongArtists[];
}

export interface PNSSongArtists {
  id: number;
  name: string;
}

export interface PersonalizedMv {
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
  artistName: string;
}


export interface Djprogram {
  id: number;
  name: string;
  picUrl: string;
}