export type ImageResponse = {
  url: string;
  height: number;
  width: number;
};

export type PlaylistResponse = {
  id: string;
  name: string;
  images: ImageResponse[];
};

export type TrackResponse = {
  id: string;
  name: string;
};

export type ErrorResponse = {
  error: string;
  message?: string;
  description?: string;
};
