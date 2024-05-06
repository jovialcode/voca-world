export class Scene {
    private readonly _name: string;
    private readonly _render: Function;

    constructor(name: string, render: Function) {
        this._name = name;
        this._render = render;
    }

    get name(): string {
        return this._name;
    }

    get render(): Function {
        return this._render;
    }
}


class SceneManager {
    private static instance: SceneManager;
    private scenes: Map<string, Scene>;
    private scenesInOrder: Array<Scene>;
    private currentSceneName: string;
    private callback?: Function;

    private constructor() {
        this.scenes = new Map<string, Scene>();
        this.scenesInOrder = new Array<Scene>();
    }

    public static getInstance = () => {
        if (!SceneManager.instance) {
            SceneManager.instance = new SceneManager();
        }
        return SceneManager.instance;
    }

    private setSceneMap = () => {
        return this.scenesInOrder.reduce((map, scene) => {
            map.set(scene.name, scene);
            return map;
        }, new Map);
    }

    resetAndInit = (scenesInOrder: Array<Scene>, callback?: Function) => {
        console.log("reset scene Manager")
        this.currentSceneName = "";
        this.scenesInOrder = scenesInOrder;
        this.scenes = this.setSceneMap();
        this.callback = callback;
    }

    getScene = (name: string) => {
        return this.scenes.get(name)
    }

    getCurrentSceneName = () => {
        return this.currentSceneName;
    }

    nextSceneName = () => {
        let scene = this.scenesInOrder.shift();
        if (!scene && this.callback) this.callback();
        if (!scene) return undefined;
        this.currentSceneName = scene.name;
        return this.currentSceneName;
    }
}

export default SceneManager;