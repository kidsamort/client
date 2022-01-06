export interface AuthState{
  isAuth: boolean
}

export enum AuthActionEnum {
  SET_AUTH = "SER_AUTH"
}

interface SetAuthAction {
  type: AuthActionEnum.SET_AUTH;
  payload: boolean;
}

export type AuthAction = SetAuthAction