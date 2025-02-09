// tests/example.spec.ts
import { test, expect } from '@playwright/test';
import { argosScreenshot } from "@argos-ci/playwright";

test('should work', async ({ page }) => {
  await page.goto('https://www.example.com');
  await argosScreenshot(page, "This is title - homepage 1");
  await expect(page).toHaveTitle(/Example Domain/);
  await argosScreenshot(page, "This is title - homepage 2");
});