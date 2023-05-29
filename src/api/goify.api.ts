import {
  AuthorizationUrlResponse,
  ErrorResponse,
  TokenResponse,
  UserProfileResponse,
  CreatePlaylistResponse,
  UserPlaylistsResponse,
} from "@mytypes/index";
import { checkStatus } from "../utils/fetch.util";

const baseUrl = "http://127.0.0.1:8080";

export const getAuthorizationUrl = (): Promise<
  AuthorizationUrlResponse | ErrorResponse
> => {
  return fetch(`${baseUrl}/api/auth`).then(checkStatus);
};

export const getToken = (
  code: string
): Promise<TokenResponse | ErrorResponse> => {
  return fetch(`${baseUrl}/api/token`, {
    method: "POST",
    body: JSON.stringify({ code }),
  }).then(checkStatus);
};

export const getProfile = async (
  token: string
): Promise<UserProfileResponse | ErrorResponse> => {
  return fetch(`${baseUrl}/api/profile`, {
    method: "GET",
    headers: {
      "X-Goifiy-Token": token,
    },
  }).then(checkStatus);
};

export const getPlaylists = (
  token: string
): Promise<UserPlaylistsResponse | ErrorResponse> => {
  return fetch(`${baseUrl}/api/playlists`, {
    method: "GET",
    headers: {
      "X-Goifiy-Token": token,
    },
  }).then(checkStatus);
};

export const createPlaylist = (
  playlists: string[],
  token: string,
  user: string,
  name: string,
  description: string
): Promise<CreatePlaylistResponse | ErrorResponse> => {
  return fetch(`${baseUrl}/api/playlists`, {
    method: "POST",
    headers: {
      "X-Goifiy-Token": token,
    },
    body: JSON.stringify({ playlists, user, name, description }),
  }).then(checkStatus);
};
