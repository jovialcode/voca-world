import React from "react";
import WordBeepGuide from "./WordBeepGuide";
import WordBeepPageLayout from "../../components/layouts/WordBeepPageLayout";

const WordBeepPage = () => {
    return (
        <>
            <WordBeepGuide/>
        </>
    )
}

WordBeepPage.getLayout = WordBeepPageLayout;
export default WordBeepPage;
