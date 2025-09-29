import { get } from 'https';

interface Options {
  url?: string;
  timeout?: number;
}

export function isInternetAvailable(options: Options = {}): Promise<boolean> {
  const url = options.url ?? 'https://www.google.com';
  const timeout = options.timeout ?? 5000;

  return new Promise((resolve) => {
    const req = get(url, (res) => {
      resolve(res.statusCode !== undefined && res.statusCode < 400);
      res.destroy(); // Clean up
    });

    req.setTimeout(timeout, () => {
      req.destroy();
      resolve(false);
    });

    req.on('error', () => {
      resolve(false);
    });
  });
}