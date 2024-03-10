"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserLauncher = void 0;
class BrowserLauncher {
    constructor(puppeteer) {
        this.puppeteer = puppeteer;
    }
    /**
     * @param {Object} options - Options for launching the browser
     * @param {string?} [chromiumExecutablePath] - Path to chromium executable
     * @returns {Promise<Browser>}
     */
    async launch(options, chromiumExecutablePath) {
        if (chromiumExecutablePath) {
            options = Object.assign(Object.assign({}, options), { executablePath: chromiumExecutablePath });
        }
        return await this.puppeteer.launch(options);
    }
}
exports.BrowserLauncher = BrowserLauncher;
