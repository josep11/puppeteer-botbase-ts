interface Options {
    url?: string;
    timeout?: number;
    headers?: Record<string, string>;
}
export declare function isInternetAvailable(options?: Options): Promise<boolean>;
export {};
