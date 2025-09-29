import { Agent, request } from "https";

interface Options {
  url?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export function isInternetAvailable(options: Options = {}): Promise<boolean> {
  const url = options.url ?? 'https://www.google.com';
  const timeout = options.timeout ?? 5000;

  return new Promise((resolve) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
      resolve(false);
    }, timeout);

    const cleanup = () => {
      clearTimeout(timeoutId);
      req.destroy();
    };

    const req = request(url, {
      method: 'HEAD',
      agent: new Agent({
        keepAlive: false, // Don't keep connection alive
        maxSockets: 1,
        maxFreeSockets: 1,
        timeout: timeout
      }),
      signal: controller.signal,
      headers: options.headers
    }, (response) => {
      cleanup();

      // Consider any 2xx/3xx status as success
      const success = response.statusCode !== undefined &&
        response.statusCode >= 200 &&
        response.statusCode < 400;

      // Drain the response body to free resources
      response.resume();
      resolve(success);
    });

    req.on('error', () => {
      cleanup();
      resolve(false);
    });

    req.on('abort', () => {
      cleanup();
      resolve(false);
    });

    req.end();
  });
}
