import { ClientHttp2Session, connect } from "http2";

interface Options {
    authority?: string;
    timeout?: number;
    options?: any;
}

export function isInternetAvailable(options: Options = {}): Promise<boolean> {
    const authority: string = options.authority ?? 'https://www.google.com';

    return new Promise((resolve) => {
        const client: ClientHttp2Session = connect(authority, options.options, () => {
            resolve(true);
            client.destroy();
        });

        if (typeof options.timeout === 'number') {
            client.setTimeout(options.timeout);
            client.on('timeout', () => {
                resolve(false);
                client.destroy();
            });
        }

        client.on('error', () => {
            resolve(false);
            client.destroy();
        });
    });
}