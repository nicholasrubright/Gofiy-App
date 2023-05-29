import { ImageResponse } from "../internal";

export type UserProfileResponse = {
  id: string;
  name: string;
  images: ImageResponse[];
};
