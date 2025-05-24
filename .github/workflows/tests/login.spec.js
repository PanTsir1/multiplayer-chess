import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://chessfantazy.com/login.php');

  await page.fill('input[name="username"]', process.env.TEST_USERNAME);
  await page.fill('input[name="password"]', process.env.TEST_PASSWORD);
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/.*profile\.php/);
  await expect(page.locator('#player-username')).toContainText(process.env.TEST_USERNAME);
});
