import { atom, selector } from "recoil";
import { padToTwo } from "../components/util";

export const timeState = atom({
  key: "timeState",
  default: 0,
});

export const elapsedTime = atom({
  key: "elapsed",
  default: 0,
});

export const offSet = atom({
  key: "offSetTime",
  default: 0,
});

export const runState = atom({
  key: "runState",
  default: false,
});

export const intervalState = atom({
  key: "interval",
  default: 0,
});

// export const displayState = selector({
//   key: "displayStater",
//   get: ({ get }) => {
//     const seconds = get(timeState);


//     // let remainSeconds = seconds % 60;

//     return `${padToTwo(seconds)}s`;
//   },
// });

export const displayState = selector({
  key: "displayrState",
  get: ({ get }) => {
    let seconds = 0;
    const deciSeconds = get(elapsedTime);

    if (deciSeconds < 10) {
      return `00:${padToTwo(deciSeconds)}`;
    }

    // let remainCentiseconds = deciSeconds % 10;
    seconds = (deciSeconds - (deciSeconds%10)) / 10;

    if (seconds < 60) {
      return `${padToTwo(seconds)}:${padToTwo(deciSeconds%10)}`;
    }

    // let remainSeconds = seconds % 60;

    return `${padToTwo(seconds)}:${padToTwo(deciSeconds%10)}`;
  },
});
