import React, {useEffect, useMemo, useState} from "react";
import WordBeepPageLayout from "../../components/layouts/WordBeepPageLayout";
import LevelTools from "../../components/tools/LevelTools";
import WordBeep from "../../components/words/WordBeep";
import SceneManager, {Scene} from "../../core/SceneManager";
import SceneProvider from "../../components/common/scene/SceneProvider";
import WordBeepBuffer from "../../components/words/WordBeepBuffer";
import DevTools from "../../components/dev/DevTools";
import WordBeepSummary from "../../components/words/WordBeepSummary";
import useLoadCallback from "../../hooks/useLoadCallback";
import {wordBeepWordsAtom} from "../../store/word_beep/atom";
import {useRecoilValue} from "recoil";
import {useQuery, useQueryClient} from "react-query";
import {list} from "../../services/apis/beepWords";

const WordBeepStart = () => {
    console.log("WordBeepStart Render")
    const [currentScene, setCurrentScene] = useState();
    const sceneManager = SceneManager.getInstance();
    const queryClient = useQueryClient();

    const words = useQuery(['words'], list);
    useMemo(() => {
        const sceneList = [];
        const nextScene = () => setCurrentScene(sceneManager.nextSceneName());
        sceneList.push(new Scene("WordBeepBuffer", () => WordBeepBuffer({callback: nextScene})))


        sceneList.push(new Scene("WordBeep-1", () => WordBeep({
            no: 1,
            pronounce: "kæt",
            spelling: "Cat",
            meaning:"고양이",
            image:"/cats.jpg",
            callback: nextScene})))
        sceneList.push(new Scene("WordBeep-2", () => WordBeep({
            no: 2,
            pronounce: "dɔːɡ",
            spelling: "Dog",
            meaning: "강아지",
            image: "/dogs.jpg",
            callback: nextScene
        })))
        sceneList.push(new Scene("WordBeep-3", () => WordBeep({
            no: 3,
            pronounce: "ræ|kuːn",
            spelling: "Raccoon",
            meaning:"너구리",
            image:"/raccoon.png",
            callback: nextScene})))
        sceneList.push(new Scene("WordBeep-4", () => WordBeep({
            no: 4,
            pronounce: "│dɑːŋki",
            spelling: "donkey",
            meaning: "당나귀",
            image: "/donkey.jpg",
            callback: nextScene
        })))
        sceneList.push(new Scene("WordBeepSummary", () => WordBeepSummary()));
        sceneManager.resetAndInit(sceneList);
    }, [])

    useEffect(() => {
        console.log(words);
        setCurrentScene(sceneManager.nextSceneName());
    }, [])

    return (
        <>
            {/*<DevTools content={[{name: "currentScene", value: sceneManager.getCurrentSceneName()}]}/>*/}
            {/*{ currentScene?.includes("WordBeep") && <LevelTools/>}*/}
            {
                currentScene && <SceneProvider sceneName={currentScene}/>
            }
        </>
    );
}

/*WordBeepStart.getInitialProps = async () =>{
    return await WordService.getWordBeep();`
}*/

WordBeepStart.getLayout = WordBeepPageLayout;
export default WordBeepStart;