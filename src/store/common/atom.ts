import { atom } from 'recoil';

import {IS_LOADING_KEY} from "../atomKey";

export const isLoadingAtom = atom({
    key: IS_LOADING_KEY,
    default: false,
});

