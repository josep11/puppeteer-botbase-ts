export declare class LoginError extends Error {
    constructor(message: string);
}
export declare class MyTimeoutError extends Error {
    constructor(message?: string);
}
export declare class NotImplementedError extends Error {
    constructor(message?: string);
}
export declare class NoInternetError extends Error {
    constructor(message?: string);
}
export declare class HTMLMarkupChangedError extends Error {
    constructor(message?: string);
}
export declare function isInternetFailedError(err: any): boolean;
export declare function isTimeoutError(err: any): boolean;
/**
 * Returns true if it is a general internet error (no internet + conn failed + timeout)
 */
export declare function isInternetError(err: any): boolean;
