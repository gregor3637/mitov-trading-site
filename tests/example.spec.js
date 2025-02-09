// tests/example.spec.ts
import { test, expect } from '@playwright/test';
import { argosScreenshot } from "@argos-ci/playwright";


test('should work', async ({ page }) => {
  await page.waitForTimeout(2000);
  
  await page.goto('http://localhost:5173/');
  await page.screenshot("screenshot - test");
  // await argosScreenshot(page, "This is title - homepage 1");
  // await expect(page).toHaveTitle(/Example Domain/);
  await argosScreenshot(page, "Homescreen investments - 2");
  const locato = page.getByText("All Rights Reserved")
  await expect(locato).toHaveScreenshot("Inline/MultiSelectField.png");
  expect(locato).toBeVisible();
});