import { atom } from "recoil";

export const secondState = atom({
  key: "secondState",
  default: "0" + 0,
});

export const centiState = atom({
  key: "centiState",
  default: "0" + 0,
});
