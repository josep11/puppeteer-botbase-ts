"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeJson = exports.createDirIfNotExists = exports.isInternetAvailable = void 0;
const http2_1 = require("http2");
const fs_1 = require("fs");
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
function createDirIfNotExists(dir) {
    if (!(0, fs_1.existsSync)(dir)) {
        (0, fs_1.mkdirSync)(dir, { recursive: true });
    }
}
exports.createDirIfNotExists = createDirIfNotExists;
function writeJson(file, obj) {
    const stringified = JSON.stringify(obj, null, 2);
    return (0, fs_1.writeFileSync)(file, stringified);
}
exports.writeJson = writeJson;
