import { existsSync, mkdirSync, writeFileSync } from "fs";


export function createDirIfNotExists(dir: string) {
    if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
    }
}

export function writeJson(file: string, obj: object): void {
    const stringified = JSON.stringify(obj, null, 2);
    return writeFileSync(file, stringified);
}
