import { test, expect } from "@playwright/test";

let myPage;
test.beforeAll(async() => {
    const { chromium } = require('playwright');
    const browser = await chromium.launch();
    myPage = await browser.newPage();
  }
);
test.afterAll(async() => {
    myPage.close();
  }
);
test("mobile test", async ({}) => {
  await myPage.setViewportSize({
    width: 425,
    height: 510,
  });
  await myPage.goto("https://jtowngolf.web.app/");

  await expect(myPage).toHaveTitle(/JTown Thursday Golf/);
  const golferName = 'Donald' + Math.floor(Math.random() * 20);
  const radios = await myPage.$$('input[name=teeTime]');
  const radio = await radios[1];
  await radio.check();
  await myPage.fill('#golfer', golferName);
  const teeTimeText = await myPage.locator("text=Sign up for tee spot on");
  const firstTeeTimeText = await teeTimeText.first();
  await expect(firstTeeTimeText).toBeVisible();
  const button = await myPage.locator('button >> nth=0');
  await button.click();
  const golfersButton = await myPage.locator('button >> nth=1');
  await golfersButton.click();
  const golferWithName = await myPage.locator("text=" + golferName + " >> nth=0");
  await golferWithName;
  await myPage.screenshot({"path":golferName + ".png"})
  await expect(golferWithName).toBeVisible();
});
