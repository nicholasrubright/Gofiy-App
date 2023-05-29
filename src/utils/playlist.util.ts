import { UserPlaylistsResponse } from "@mytypes/response.type";
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
) => {
  return playlists
    .filter((playlist) => mapping[playlist.id])
    .map((playlist) => playlist.id);
};

export const transformPlaylists = (
  playlists: UserPlaylistsResponse
): Playlist[] => {
  return playlists.playlists.map((playlist) => {
    return {
      id: playlist.id,
      img: playlist.images[0].url,
      name: playlist.name,
    };
  });
};
