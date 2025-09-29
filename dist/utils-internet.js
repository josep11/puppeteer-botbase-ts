"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInternetAvailable = isInternetAvailable;
const https_1 = require("https");
function isInternetAvailable(options = {}) {
    var _a, _b;
    const url = (_a = options.url) !== null && _a !== void 0 ? _a : 'https://www.google.com';
    const timeout = (_b = options.timeout) !== null && _b !== void 0 ? _b : 5000;
    return new Promise((resolve) => {
        const req = (0, https_1.get)(url, (res) => {
            resolve(res.statusCode !== undefined && res.statusCode < 400);
            res.destroy(); // Clean up
        });
        req.setTimeout(timeout, () => {
            req.destroy();
            resolve(false);
        });
        req.on('error', () => {
            resolve(false);
        });
    });
}
