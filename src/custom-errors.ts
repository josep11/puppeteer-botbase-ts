export class LoginError extends Error {
  constructor(message: string) {
    super(message);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
  }
}

export class MyTimeoutError extends Error {
  constructor(message = "Conexió Lenta ❌") {
    super(message);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
  }
}

export class NotImplementedError extends Error {
  constructor(message = "Method not implemented") {
    super(message);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
  }
}

export class NoInternetError extends Error {
  constructor(message = "No Tens Internet ❌") {
    super(message);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
  }
}

export class HTMLMarkupChangedError extends Error {
  constructor(message = "Markup: The page HTML changed. Need to fix it") {
    super(message);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
  }
}

/*
 FUNCTIONS TO TRANSFORM/FIND ERRORS
 */

export function isInternetFailedError(err: any): boolean {
  return Boolean(
    err.message?.includes("ERR_INTERNET_DISCONNECTED") ||
      err.message?.includes("ERR_PROXY_CONNECTION_FAILED")
  );
}

export function isTimeoutError(err: any): boolean {
  return Boolean(
    err.name?.includes("TimeoutError") ||
      err.message?.includes("TimeoutError") ||
      err.message?.includes("net::ERR_TIMED_OUT")
  );
}

/**
 * Returns true if it is a general internet error (no internet + conn failed + timeout)
 */
export function isInternetError(err: any): boolean {
  return isInternetFailedError(err) || isTimeoutError(err);
}
