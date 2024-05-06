import {WORDS_BEEP_ERROR} from "../const/messages";

export const WordBeepErrorMessage = ({ response }) => {
    const {
        NOT_FOUND,
        INTERNAL_SERVER_ERROR,
        UNAUTHORIZED,
        SOMETHING_WRONG,
    } = WORDS_BEEP_ERROR;

    const { status } = response;

    if (status === 400 || status === 404) {
        return NOT_FOUND;
    }

    if (status === 403 || status === 401) {
        return UNAUTHORIZED;
    }

    if (status === 500) {
        return INTERNAL_SERVER_ERROR;
    }

    return SOMETHING_WRONG;
};