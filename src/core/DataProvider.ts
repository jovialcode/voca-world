class DataProvider {
    private readonly dataFn: Function;
    private dataList: any[] | undefined;
    private currentIndex = 0;

    constructor(dataProvideFn: Function) {
        this.dataFn = dataProvideFn;
    }

    async init() {
        this.dataList = await this.dataFn();
    }

    getOne() {

    }

    getAll() {

    }

    reset() {

    }
}

export default DataProvider