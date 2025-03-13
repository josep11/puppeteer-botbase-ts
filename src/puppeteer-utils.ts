import { CookieData, Page } from "puppeteer";
import { helper } from "./index";

export async function semiRandomiseViewPort(
  page: Page,
  width: number,
  height: number
) {
  await page.setViewport({
    width: width + helper.getRandBetween(1, 100),
    height: height + helper.getRandBetween(1, 100),
  });
}

export function objectToCookieData(obj: object): CookieData {
  const newObj = obj as Partial<CookieData>;

  // The name and value properties are mandatory
  if (!newObj.name || !newObj.value) {
    throw new Error("Missing mandatory properties");
  }

  // If all properties are present, cast to CookieData and return
  return newObj as CookieData;
}

export function objectArrayToCookieParamArray(
  cookies: object[]
): CookieData[] {
  const cookiesValidated: CookieData[] = [];
  for (const cookie of cookies) {
    cookiesValidated.push(objectToCookieData(cookie));
  }
  return cookiesValidated;
}
