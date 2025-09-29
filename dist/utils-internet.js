"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInternetAvailable = isInternetAvailable;
const https_1 = require("https");
function isInternetAvailable(options = {}) {
    var _a, _b;
    const url = (_a = options.url) !== null && _a !== void 0 ? _a : 'https://www.google.com';
    const timeout = (_b = options.timeout) !== null && _b !== void 0 ? _b : 5000;
    return new Promise((resolve) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
            controller.abort();
        }, timeout);
        const req = (0, https_1.request)(url, {
            method: 'HEAD',
            agent: new https_1.Agent({ keepAlive: false }), // Don't keep connection alive
            signal: controller.signal,
            headers: options.headers
        }, (response) => {
            clearTimeout(timeoutId);
            // Consider any 2xx/3xx status as success
            const success = response.statusCode !== undefined &&
                response.statusCode >= 200 &&
                response.statusCode < 400;
            // Drain the response body to free resources
            response.resume();
            resolve(success);
        });
        req.on('error', () => {
            clearTimeout(timeoutId);
            resolve(false);
        });
        req.on('abort', () => {
            resolve(false);
        });
        req.end();
    });
}
