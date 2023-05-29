import { PlaylistResponse, TrackResponse } from "../internal";

export type UserPlaylistsResponse = {
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  playlists: PlaylistResponse[];
};

export type CreatePlaylistResponse = {
  id: string;
  name: string;
  tracks: TrackResponse[];
};
