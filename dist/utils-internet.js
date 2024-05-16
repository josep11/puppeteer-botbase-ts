"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInternetAvailable = void 0;
const http2_1 = require("http2");
function isInternetAvailable(options = {}) {
    var _a;
    const authority = (_a = options.authority) !== null && _a !== void 0 ? _a : 'https://www.google.com';
    return new Promise((resolve) => {
        const client = (0, http2_1.connect)(authority, options.options, () => {
            resolve(true);
            client.destroy();
        });
        if (typeof options.timeout === 'number') {
            client.setTimeout(options.timeout);
            client.on('timeout', () => {
                resolve(false);
                client.destroy();
            });
        }
        client.on('error', () => {
            resolve(false);
            client.destroy();
        });
    });
}
exports.isInternetAvailable = isInternetAvailable;
