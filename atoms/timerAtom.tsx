import { atom } from "recoil";

export const secondState = atom({
    key: 'secondState',
    default: '00',
})

export const microState = atom({
    key: 'microState',
    default: '00',
})