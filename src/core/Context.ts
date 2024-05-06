import SceneManager from "./SceneManager";

export class Context {
    private static instance: Context;
    private readonly _sceneManager: SceneManager;

    constructor() {
        this._sceneManager = SceneManager.getInstance();
    }

    public static getInstance() {
        if (!Context.instance) {
            Context.instance = new Context();
        }
        return Context.instance;
    }

    get sceneManager(): SceneManager {
        return this._sceneManager;
    }
}