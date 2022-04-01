import { IToken } from "./../token-model";
import { IUser } from "./../user-model";
export interface AuthResponse {
  user: IUser;
  tokens: IToken;
}
