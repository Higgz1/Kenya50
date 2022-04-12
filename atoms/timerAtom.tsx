import { atom } from "recoil";

export const timerState = atom({
  key: "time",
  default: 0,
});

export const runState = atom({
  key:"timerState",
  default:false
})

export const intervalState = atom({
  key:"interval",
  default:0
})
