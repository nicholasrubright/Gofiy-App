export type CreatePlaylistRequest = {
  user_id: string;
  name: string;
  description: string;
  playlist_ids: string[];
};
