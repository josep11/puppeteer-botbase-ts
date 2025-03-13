import { ScreenshotSaverInterface } from "./screenshot-saver-interface";
export declare class ScreenshotSaver implements ScreenshotSaverInterface {
    private readonly screenshotBasepath;
    private allowedTypes;
    constructor(screenshotBasepath: string);
    _checkType(type: string): void;
    saveScreenshot(imageBuffer: Buffer | Uint8Array, type: string, filename?: string): Promise<string>;
}
