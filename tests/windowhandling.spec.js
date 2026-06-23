import {test} from '@playwright/test';

test('Window handling', async ({ browser }) => {
  // Create a new browser context
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to Flipkart
  await page.goto("https://www.flipkart.com");

  // Search for iPhone 17
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('airpods pro 3');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).press('Enter');

  // Wait for new tab to open when clicking product
  const [newTab] = await Promise.all([
    context.waitForEvent('page'),
    page.click('a[title="Apple AirPods Pro 3 Bluetooth"]')
  ]);

  // Wait for the new tab to load
  await newTab.waitForLoadState();

  // Print the title of the new tab
  console.log(await newTab.title());
});