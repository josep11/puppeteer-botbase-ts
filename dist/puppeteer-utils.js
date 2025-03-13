"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.semiRandomiseViewPort = semiRandomiseViewPort;
exports.objectToCookieData = objectToCookieData;
exports.objectArrayToCookieParamArray = objectArrayToCookieParamArray;
const index_1 = require("./index");
async function semiRandomiseViewPort(page, width, height) {
    await page.setViewport({
        width: width + index_1.helper.getRandBetween(1, 100),
        height: height + index_1.helper.getRandBetween(1, 100),
    });
}
function objectToCookieData(obj) {
    const newObj = obj;
    // The name and value properties are mandatory
    if (!newObj.name || !newObj.value) {
        throw new Error("Missing mandatory properties");
    }
    // If all properties are present, cast to CookieData and return
    return newObj;
}
function objectArrayToCookieParamArray(cookies) {
    const cookiesValidated = [];
    for (const cookie of cookies) {
        cookiesValidated.push(objectToCookieData(cookie));
    }
    return cookiesValidated;
}
