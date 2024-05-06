import {selectorFamily} from 'recoil';
import WordService from "../../services/WordService";
import {WORD_BEEP_WORDS_LOAD_KEY} from "../atomKey";


const wordBeepWordsWithLoad = selectorFamily({
    key: WORD_BEEP_WORDS_LOAD_KEY,
    get: () => async () => {
        return await WordService.getWordBeep();
    },
});

export default wordBeepWordsWithLoad;