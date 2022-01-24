import { User } from "./user";

export interface SigninHttpResponse {
  token: string;
  user: User
}
