import {test} from '@playwright/test';

test('Executing page navigators',  async({page})=>{
  await page.goto('https://www.amazon.com/');
  await page.goto('https://www.flipkart.com/');
  await page.goto('https://www.myntra.com/');
  await page.goBack();
  await page.goBack();
  await page.goForward();
  await page.goForward();
  await page.reload();
});