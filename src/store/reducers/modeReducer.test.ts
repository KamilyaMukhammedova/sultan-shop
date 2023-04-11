import { ModeActions, ModeActionsTypes, ModeState } from "../../types/mode";
import { modeReducer } from "./modeReducer";

describe("Toggle mode reducer", () => {
  it("Setting admin mode", () => {
    const state: ModeState = {
      isAdminMode: false
    };
    const modifiedState = modeReducer(state, {type: ModeActionsTypes.SET_MODE, payload: true} as ModeActions);
    expect(modifiedState.isAdminMode).toBeTruthy();
  });

  it("Setting user mode", () => {
    const state: ModeState = {
      isAdminMode: true
    };
    const modifiedState = modeReducer(state, {type: ModeActionsTypes.SET_MODE, payload: false} as ModeActions);
    expect(modifiedState.isAdminMode).toBeFalsy();
  });
});