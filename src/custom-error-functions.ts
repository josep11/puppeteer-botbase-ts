// ------------------------------------
//  FUNCTIONS TO TRANSFORM/FIND ERRORS
// ------------------------------------

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

export function isTargetBrowserClosedError(err: any): boolean {
  return Boolean(err.message?.includes("Protocol error: Connection closed."));
}