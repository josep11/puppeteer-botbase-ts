"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDirIfNotExists = createDirIfNotExists;
exports.writeJson = writeJson;
const fs_1 = require("fs");
function createDirIfNotExists(dir) {
    if (!(0, fs_1.existsSync)(dir)) {
        (0, fs_1.mkdirSync)(dir, { recursive: true });
    }
}
function writeJson(file, obj) {
    const stringified = JSON.stringify(obj, null, 2);
    return (0, fs_1.writeFileSync)(file, stringified);
}
