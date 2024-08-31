"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenshotSaver = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const helper_1 = require("../helper");
class ScreenshotSaver {
    constructor(screenshotBasepath) {
        if (!screenshotBasepath) {
            throw new Error("screenshotBasepath parameter not defined");
        }
        this.screenshotBasepath = screenshotBasepath;
        this.allowedTypes = ["jpg", "jpeg", "png"];
        //check that the screenshotBasepath exists or create it
        helper_1.helper.createDirIfNotExists((0, path_1.dirname)(this.screenshotBasepath));
    }
    _checkType(type) {
        if (!type) {
            throw new Error("type is not defined");
        }
        if (!this.allowedTypes.includes(type)) {
            throw new Error(`Type "${type}" not allowed.`);
        }
    }
    // eslint-disable-next-line require-await
    async saveScreenshot(imageBuffer, type, filename = "default") {
        //check for errors
        this._checkType(type);
        if (imageBuffer instanceof Uint8Array) {
            imageBuffer = Buffer.from(imageBuffer);
        }
        const screenshotLocation = `${this.screenshotBasepath}/${helper_1.helper.dateFormatForLog()}_${filename}.${type}`;
        // console.log(`Saving screenshot "${filename}" at ${screenshotLocation}`);
        (0, fs_1.writeFileSync)(screenshotLocation, imageBuffer);
        return screenshotLocation;
    }
}
exports.ScreenshotSaver = ScreenshotSaver;
