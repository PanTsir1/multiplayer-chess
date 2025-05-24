const { test, expect } = require('@playwright/test');

test('Homepage loads', async ({ page }) => {
  await page.goto('https://chessfantazy.com/multiplayer.php');
  await expect(page).toHaveTitle(/Chess/);
});
