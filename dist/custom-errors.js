"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLMarkupChangedError = exports.NoInternetError = exports.NotImplementedError = exports.MyTimeoutError = exports.LoginError = void 0;
exports.isInternetFailedError = isInternetFailedError;
exports.isTimeoutError = isTimeoutError;
exports.isInternetError = isInternetError;
class LoginError extends Error {
    constructor(message) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
    }
}
exports.LoginError = LoginError;
class MyTimeoutError extends Error {
    constructor(message = "Conexió Lenta ❌") {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
    }
}
exports.MyTimeoutError = MyTimeoutError;
class NotImplementedError extends Error {
    constructor(message = "Method not implemented") {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
    }
}
exports.NotImplementedError = NotImplementedError;
class NoInternetError extends Error {
    constructor(message = "No Tens Internet ❌") {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
    }
}
exports.NoInternetError = NoInternetError;
class HTMLMarkupChangedError extends Error {
    constructor(message = "Markup: The page HTML changed. Need to fix it") {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
    }
}
exports.HTMLMarkupChangedError = HTMLMarkupChangedError;
// ------------------------------------
//  FUNCTIONS TO TRANSFORM/FIND ERRORS
// ------------------------------------
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
