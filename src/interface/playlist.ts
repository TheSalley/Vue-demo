export interface PlayListDetail {
  id: number;
  name: string;
  coverImgUrl: string;
  creator: Creator;
  tags: string[];
  description: string;
}

export interface Creator {
  avatarUrl: string;
  nickname: string;
}
