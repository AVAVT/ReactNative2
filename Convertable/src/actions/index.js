import { CHANGE_BASE_VALUE } from "./types";

export const createChangeBaseValueAction = value => ({
  type: CHANGE_BASE_VALUE,
  payload: value
});
