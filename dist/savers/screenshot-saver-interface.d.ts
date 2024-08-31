export interface ScreenshotSaverInterface {
    /**
     * @returns {Promise<string>} the place where the image is stored
     */
    saveScreenshot(imageBuffer: Buffer | Uint8Array, type: string, filename: string): Promise<string>;
}
