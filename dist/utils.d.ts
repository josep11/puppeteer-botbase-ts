interface Options {
    authority?: string;
    timeout?: number;
    options?: any;
}
export declare function isInternetAvailable(options?: Options): Promise<boolean>;
export declare function createDirIfNotExists(dir: string): void;
export declare function writeJson(file: string, obj: object): void;
export {};
