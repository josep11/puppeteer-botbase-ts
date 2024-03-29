import {ClientHttp2Session, connect} from "http2";
import {existsSync, mkdirSync, writeFileSync} from "fs";
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


export function createDirIfNotExists(dir: string) {
    if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
    }
}

export function writeJson(file: string, obj: object): void {
    const stringified = JSON.stringify(obj, null, 2);
    return writeFileSync(file, stringified);
}
