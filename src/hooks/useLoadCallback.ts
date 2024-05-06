import {useRecoilCallback} from 'recoil';


import {isLoadingAtom} from "../store/common/atom";
import wordBeepWordsWithLoad from "../store/word_beep/withLoad";
import {wordBeepWordsAtom} from "../store/word_beep/atom";
import {WordBeepErrorMessage} from "../helper/errorHandler";

const useLoadCallback = () => useRecoilCallback(({snapshot, set, reset}) => async () => {
    set(isLoadingAtom, true);

    try {
        const {data} = await snapshot.getPromise(wordBeepWordsWithLoad());

        set(
            wordBeepWordsAtom,
            (prevState) => ({
                ...prevState,
                todos: data,
            }),
        );
    } catch (error) {
        set(wordBeepWordsAtom, (prevState) => ({
            ...prevState,
            todoError: WordBeepErrorMessage(error),
        }));
    } finally {
        reset(isLoadingAtom);
    }
}, [isLoadingAtom, wordBeepWordsAtom]);

export default useLoadCallback;