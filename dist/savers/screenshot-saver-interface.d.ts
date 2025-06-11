import { ImageFormat } from "puppeteer";
export interface ScreenshotSaverInterface {
    /**
     * @returns {Promise<string>} the place where the image is stored
     */
    saveScreenshot(imageBuffer: Buffer | Uint8Array, type: ImageFormat, filename: string): Promise<string>;
}
