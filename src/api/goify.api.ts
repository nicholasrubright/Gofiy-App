import {
  AuthUrlResponse,
  ErrorResponse,
  TokenResponse,
  UserProfileResponse,
} from "@mytypes/index";
import { checkStatus } from "../utils/fetch.util";
import { UserPlaylistsResponse } from "@mytypes/response.type";

const baseUrl = "http://127.0.0.1:8080";

export const getAuthorizationUrl = (): Promise<
  AuthUrlResponse | ErrorResponse
> => {
  return fetch(`${baseUrl}/api/auth`).then(checkStatus);
};

export const getToken = (
  code: string
): Promise<TokenResponse | ErrorResponse> => {
  console.log("getting token!!!!");
  return fetch(`${baseUrl}/api/token`, {
    method: "POST",
    body: JSON.stringify({ code }),
  }).then(checkStatus);
};

export const getProfile = (
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
