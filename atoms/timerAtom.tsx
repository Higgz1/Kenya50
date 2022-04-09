import { atom } from "recoil";

export const secondState = atom({
  key: "secondState",
  default: 50,
});

export const centiState = atom({
  key: "centiState",
  default: "00",
});

export const timerState = atom({
  key:"timerState",
  default:false
})
