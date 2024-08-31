"use strict";
// ------------------------------------
//  FUNCTIONS TO TRANSFORM/FIND ERRORS
// ------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInternetFailedError = isInternetFailedError;
exports.isTimeoutError = isTimeoutError;
exports.isInternetError = isInternetError;
function isInternetFailedError(err) {
    var _a, _b;
    return Boolean(((_a = err.message) === null || _a === void 0 ? void 0 : _a.includes("ERR_INTERNET_DISCONNECTED")) ||
        ((_b = err.message) === null || _b === void 0 ? void 0 : _b.includes("ERR_PROXY_CONNECTION_FAILED")));
}
function isTimeoutError(err) {
    var _a, _b, _c;
    return Boolean(((_a = err.name) === null || _a === void 0 ? void 0 : _a.includes("TimeoutError")) ||
        ((_b = err.message) === null || _b === void 0 ? void 0 : _b.includes("TimeoutError")) ||
        ((_c = err.message) === null || _c === void 0 ? void 0 : _c.includes("net::ERR_TIMED_OUT")));
}
/**
 * Returns true if it is a general internet error (no internet + conn failed + timeout)
 */
function isInternetError(err) {
    return isInternetFailedError(err) || isTimeoutError(err);
}
