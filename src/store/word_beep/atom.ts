import {atom} from "recoil";
import {WORD_BEEP_WORDS_KEY} from "../atomKey";

export type wordBeepState = {
    level: number,
    wordSet: number
}

export type WordBeepWord = {
    no: number;
    spelling: string;
    meaning: string;
    image: string;
    pronounce: string;
}

export const wordBeepState = atom<wordBeepState>({
    key: "wordBeepState",
    default: {
        level: 1,
        wordSet: 5
    }
})

export const wordBeepWordsAtom = atom({
    key: WORD_BEEP_WORDS_KEY,
    default: {
        words: [],
        wordError: null,
        wordSuccess: null,
    }
})