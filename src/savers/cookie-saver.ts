import fs from "fs";
import { dirname } from "path";

import { helper } from "../helper";
import { CookieSaverInterface } from "./cookie-saver-interface";

export class CookieSaver implements CookieSaverInterface {
  private readonly cookiesFilePath: string;

  constructor(cookiesFilePath: string) {
    this.cookiesFilePath = cookiesFilePath;

    if (!cookiesFilePath.length) {
      throw new Error("cookiesFilePath is invalid");
    }

    helper.createDirIfNotExists(dirname(this.cookiesFilePath));
  }

  /**
   *
   * @returns {Promise<object[]>}
   */
  // eslint-disable-next-line require-await
  async readCookies(): Promise<object[]> {
    let cookies: object[] = [];
    try {
      const cookiesRaw = helper.loadJson(this.cookiesFilePath);

      // Check if cookies is an array
      if (!(cookiesRaw instanceof Array)) {
        // noinspection ExceptionCaughtLocallyJS
        throw new Error("cookies is not an array");
      }

      // Check if all elements in the array are objects
      for (const cookie of cookiesRaw) {
        if (typeof cookie !== "object") {
          // noinspection ExceptionCaughtLocallyJS
          throw new Error("Array contains non-object elements");
        }
        cookies.push(cookie);
      }
    } catch (err: any) {
      if (err.code !== "ENOENT") {
        console.error("Reading cookie error. Defaulting to [] \n\n" + err);
      }
      return [];
    }
    return cookies;
  }

  // eslint-disable-next-line require-await
  async writeCookies(cookies: object | string): Promise<void> {
    let cookiesText: string;
    if (typeof cookies === "object") {
      cookiesText = JSON.stringify(cookies, null, 2);
    } else {
      cookiesText = cookies;
    }

    fs.writeFileSync(this.cookiesFilePath, cookiesText);
  }

  /**
   * When extending it, should save "[]" as empty cookie
   */
  async removeCookies() {
    await this.writeCookies("[]");
  }
}
