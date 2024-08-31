"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.semiRandomiseViewPort = semiRandomiseViewPort;
exports.objectToCookieParam = objectToCookieParam;
exports.objectArrayToCookieParamArray = objectArrayToCookieParamArray;
const index_1 = require("./index");
async function semiRandomiseViewPort(page, width, height) {
    await page.setViewport({
        width: width + index_1.helper.getRandBetween(1, 100),
        height: height + index_1.helper.getRandBetween(1, 100),
    });
}
function objectToCookieParam(obj) {
    const newObj = obj;
    // The name and value properties are mandatory
    if (!newObj.name || !newObj.value) {
        throw new Error("Missing mandatory properties");
    }
    // If all properties are present, cast to CookieParam and return
    return newObj;
}
function objectArrayToCookieParamArray(cookies) {
    const cookiesValidated = [];
    for (const cookie of cookies) {
        cookiesValidated.push(objectToCookieParam(cookie));
    }
    return cookiesValidated;
}
