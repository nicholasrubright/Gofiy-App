import {
  AuthUrlResponse,
  ErrorResponse,
  TokenRequest,
  TokenResponse,
  UserProfileResponse,
} from "@mytypes/index";
import { checkStatus } from "../utils/fetch.util";

const baseUrl = "http://127.0.0.1:8080";

export const getAuthorizationUrl = (): Promise<
  AuthUrlResponse | ErrorResponse
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

export const getProfile = (
  token: string
): Promise<UserProfileResponse | ErrorResponse> => {
  return fetch(`${baseUrl}/api/profile`, {
    method: "GET",
    headers: {
      "x-goifiy-token": token,
    },
  }).then(checkStatus);
};
