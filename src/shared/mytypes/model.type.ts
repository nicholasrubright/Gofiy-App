export type Playlist = {
  id: string;
  name: string;
  img: string;
};

export type PlaylistMapping = Record<string, boolean>;

export enum AlertEnum {
  ERROR,
  INFO,
}
