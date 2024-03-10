"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectArrayToCookieParamArray = exports.objectToCookieParam = exports.semiRandomiseViewPort = void 0;
const index_1 = require("./index");
async function semiRandomiseViewPort(page, width, height) {
    await page.setViewport({
        width: width + index_1.helper.getRandBetween(1, 100),
        height: height + index_1.helper.getRandBetween(1, 100),
    });
}
exports.semiRandomiseViewPort = semiRandomiseViewPort;
function objectToCookieParam(obj) {
    const newObj = obj;
    // The name and value properties are mandatory
    if (!newObj.name || !newObj.value) {
        throw new Error("Missing mandatory properties");
    }
    // If all properties are present, cast to CookieParam and return
    return newObj;
}
exports.objectToCookieParam = objectToCookieParam;
function objectArrayToCookieParamArray(cookies) {
    const cookiesValidated = [];
    for (const cookie of cookies) {
        cookiesValidated.push(objectToCookieParam(cookie));
    }
    return cookiesValidated;
}
exports.objectArrayToCookieParamArray = objectArrayToCookieParamArray;
