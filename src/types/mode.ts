export interface ModeState {
  isAdminMode: boolean
}

export enum ModeActionsTypes {
  SET_MODE = 'SET_MODE'
}

export interface SetMode {
  type: ModeActionsTypes.SET_MODE,
  payload: boolean
}

export type ModeActions = SetMode;
