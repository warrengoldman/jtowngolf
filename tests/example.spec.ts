import { test, expect } from "@playwright/test";

test("mobile test", async ({ page }) => {
  await page.setViewportSize({
    width: 425,
    height: 510,
  });
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveTitle(/JTown Thursday Golf/);
  const golferName = 'Donald' + Math.floor(Math.random() * 20);
  //const radios = await page.$$('input[type="radio"]');
  const radios = await page.$$('input[name=teeTime]');
  await radios[1].check();
  await page.fill('#golfer', golferName);
  const teeTimeText = await page.locator("text=Sign up for tee spot on");
  const firstTeeTimeText = await teeTimeText.first();
  await expect(firstTeeTimeText).toBeVisible();
  const button = await page.locator('button >> nth=0');
  await button.click();
  await page.pause();
  const golferWithName = await page.locator("text=" + golferName);
  const golfer = await golferWithName.first();
  await expect(golfer).toBeVisible();
});
