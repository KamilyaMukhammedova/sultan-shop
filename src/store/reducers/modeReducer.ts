import { ModeActions, ModeActionsTypes, ModeState } from "../../types/mode";

const initialState: ModeState = {
  isAdminMode: false
};

export const modeReducer = (state = initialState, action: ModeActions): ModeState => {
  switch (action.type) {
    case ModeActionsTypes.SET_MODE:
      return {...state, isAdminMode: action.payload};
    default:
      return state;
  }
};