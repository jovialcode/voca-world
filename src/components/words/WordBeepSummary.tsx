import WordBeepPageLayout from "../layouts/WordBeepPageLayout";
import {WordBody, WordHead} from "./WordBeepLayout";
import React from "react";

const WordBeepSummary = () => {
    return (
        <>
            <WordHead>
                조금전까지 외웠던 단어들을 정리해봅시다.
            </WordHead>
            <WordBody>

            </WordBody>
        </>
    )
}

WordBeepSummary.getLayout = WordBeepPageLayout;
export default WordBeepSummary;