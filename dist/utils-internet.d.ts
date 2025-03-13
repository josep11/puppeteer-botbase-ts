interface Options {
    authority?: string;
    timeout?: number;
    options?: any;
}
export declare function isInternetAvailable(options?: Options): Promise<boolean>;
export {};
