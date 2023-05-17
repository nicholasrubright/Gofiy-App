import {
  AuthUrlResponse,
  ErrorResponse,
  TokenRequest,
  TokenResponse,
  UserProfileResponse,
} from "@shared/mytypes/index";

interface IGoifyApi {
  checkStatus: (response: Response) => Promise<any>;

  getAuthUrl: () => Promise<AuthUrlResponse | ErrorResponse>;
  getToken: (
    tokenRequest: TokenRequest
  ) => Promise<TokenResponse | ErrorResponse>;
  getProfile: () => Promise<UserProfileResponse | ErrorResponse>;
}

export default class GoifyApi {
  baseUrl: string;
  token: string;
  constructor() {
    this.baseUrl = "http://127.0.0.1:8080";
    this.token = "";
  }

  async checkStatus(response: Response): Promise<any> {
    if (response.ok) {
      return response.json();
    }

    return response.json() as Promise<ErrorResponse>;
  }

  async setToken(code: string): Promise<void> {
    const response = await this.getToken({ code });

    if ("token" in response) {
      this.token = response.token;
      return;
    }

    console.log("Something wrong in token");
    console.log((response as ErrorResponse).description);
  }

  async getAuthUrl(): Promise<AuthUrlResponse | ErrorResponse> {
    return fetch(`${this.baseUrl}/api/auth`).then(this.checkStatus);
  }

  async getToken(
    tokenRequest: TokenRequest
  ): Promise<TokenResponse | ErrorResponse> {
    return fetch(`${this.baseUrl}/api/token`, {
      method: "POST",
      body: JSON.stringify({ ...tokenRequest }),
    }).then(this.checkStatus);
  }
}
