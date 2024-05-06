import {atom} from "recoil";

export const myAccountState = atom({
    key: "myAccountState",
    default: {
        name: 'theo',
        tier: 1,
        scores: 2531
    }
})