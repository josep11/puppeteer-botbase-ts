import { CookieData, Page } from "puppeteer";
export declare function semiRandomiseViewPort(page: Page, width: number, height: number): Promise<void>;
export declare function objectToCookieData(obj: object): CookieData;
export declare function objectArrayToCookieParamArray(cookies: object[]): CookieData[];
