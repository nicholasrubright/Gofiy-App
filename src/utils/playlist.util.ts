import { Playlist, PlaylistMapping } from "../shared/mytypes";

export const getPlaylistMapping = (playlists: Playlist[]): PlaylistMapping => {
  const mapping: PlaylistMapping = {};

  playlists.forEach((playlist) => {
    const { id } = playlist;
    mapping[id] = false;
  });

  return mapping;
};

export const getSelectedPlaylists = (
  playlists: Playlist[],
  mapping: PlaylistMapping
) => {};
