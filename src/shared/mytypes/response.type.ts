export type TokenResponse = {
  token: string;
  expires_in: number;
};

export type AuthUrlResponse = {
  url: string;
};

// Error Response
export type ErrorResponse = {
  status: number;
  message?: string;
  description?: string;
};

// User Profile
export type UserProfileResponse = {
  name: string;
  images: UserImageResponse[];
};

export type UserImageResponse = {
  url: string;
  height: number;
  width: number;
};

// User Playlist
export type UserPlaylistsResponse = {
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  playlists: UserPlaylistResponse[];
};

export type UserPlaylistResponse = {
  id: string;
  images: UserImageResponse[];
  name: string;
};
