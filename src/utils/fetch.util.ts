import { ErrorResponse } from "@shared/mytypes/index";

export const checkStatus = (response: Response): Promise<any> => {
  if (response.ok || response.status == 302) {
    return response.json();
  }

  return response.json() as Promise<ErrorResponse>;
};
