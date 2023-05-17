export type TokenResponse = {
  token: string;
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

export type UserProfileResponse = {
  country: string;
  displayName: string;
  email: string;
  explicitContent: ExplicitContent;
  externalUrls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
};

type Image = {
  url: string;
  height: number;
  width: number;
};

type Followers = {
  href: string;
  total: number;
};

type ExternalUrls = {
  spotify: string;
};

type ExplicitContent = {
  filterEnabled: boolean;
  filterLocked: boolean;
};
