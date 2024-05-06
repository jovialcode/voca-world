import React from "react";
import SceneManager from "../../../core/SceneManager";

type Props = {
    sceneName: string,
    delay?: number,
    callBack?: Function
}

const SceneProvider = (props: Props) => {
    const sceneName = props.sceneName;
    const sceneManager = SceneManager.getInstance();
    const scene = sceneManager.getScene(sceneName);

    console.log(`SceneProvider Render ${sceneName}`)

    return (
        <>
            {scene && scene.render()}
        </>
    )
}

export default SceneProvider;