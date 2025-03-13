"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieSaver = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const helper_1 = require("../helper");
class CookieSaver {
    constructor(cookiesFilePath) {
        this.cookiesFilePath = cookiesFilePath;
        if (!cookiesFilePath.length) {
            throw new Error("cookiesFilePath is invalid");
        }
        helper_1.helper.createDirIfNotExists((0, path_1.dirname)(this.cookiesFilePath));
    }
    /**
     *
     * @returns {Promise<object[]>}
     */
    // eslint-disable-next-line require-await
    async readCookies() {
        try {
            const cookies = helper_1.helper.loadJson(this.cookiesFilePath);
            // Check if cookies is an array
            if (!(cookies instanceof Array)) {
                // noinspection ExceptionCaughtLocallyJS
                throw new Error("cookies is not an array");
            }
            // Check if all elements in the array are objects
            for (const cookie of cookies) {
                if (typeof cookie !== "object") {
                    // noinspection ExceptionCaughtLocallyJS
                    throw new Error("Array contains non-object elements");
                }
            }
        }
        catch (err) {
            if (err.code !== "ENOENT") {
                console.error("Reading cookie error. Defaulting to [] \n\n" + err);
            }
        }
        return [];
    }
    // eslint-disable-next-line require-await
    async writeCookies(cookies) {
        let cookiesText;
        if (typeof cookies === "object") {
            cookiesText = JSON.stringify(cookies, null, 2);
        }
        else {
            cookiesText = cookies;
        }
        fs_1.default.writeFileSync(this.cookiesFilePath, cookiesText);
    }
    /**
     * When extending it, should save "[]" as empty cookie
     */
    async removeCookies() {
        await this.writeCookies("[]");
    }
}
exports.CookieSaver = CookieSaver;
