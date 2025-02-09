// tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('should work', async ({ page }) => {
  await page.goto('https://www.example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});