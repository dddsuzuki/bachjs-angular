export declare class Context {
    private store;
    constructor(store: any);
    readonly state: any;
    dispatch(action: string, payload?: any): any;
    commit(mutation: string, payload?: any): any;
    subscribe(event: string, callback: any): void;
    unsubbscribe(event: string, callback: any): void;
}
