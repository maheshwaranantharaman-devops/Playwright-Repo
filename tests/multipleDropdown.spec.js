import {test} from '@playwright/test';

test('Handling Dropdown By Value',  async({page})=>{
  await page.goto('https://testautomationcentral.com/demo/dropdown.html');
  var url = await page.url();
  var title = await page.title();
  console.log(`Page url: ${url}`);
  console.log(`Page title: ${title}`);
  await page.screenshot({path:'./screenshot1.png'});
  await page.waitForSelector('button[data-target="multi-select-dropdown"]');
  await page.locator('button[data-target="multi-select-dropdown"]').click(); 
  await page.selectOption('[class="form-multiselect block w-full mt-1"]', ["option1", "option2", "option3"]);
  await page.waitForTimeout(5000);
});

test('Handling Dropdown By Text',  async({page})=>{
  await page.goto('https://testautomationcentral.com/demo/dropdown.html');
  var url = await page.url();
  var title = await page.title();
  console.log(`Page url: ${url}`);
  console.log(`Page title: ${title}`);
  await page.screenshot({path:'./screenshot1.png'});
  await page.waitForSelector('button[data-target="multi-select-dropdown"]');
  await page.locator('button[data-target="multi-select-dropdown"]').click(); 
  await page.selectOption('[class="form-multiselect block w-full mt-1"]', [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' }
  ]);
  await page.waitForTimeout(5000);
});

test('Handling Dropdown By Index',  async({page})=>{
  await page.goto('https://testautomationcentral.com/demo/dropdown.html');
  var url = await page.url();
  var title = await page.title();
  console.log(`Page url: ${url}`);
  console.log(`Page title: ${title}`);
  await page.waitForSelector('button[data-target="multi-select-dropdown"]');
  await page.locator('button[data-target="multi-select-dropdown"]').click(); 
  await page.selectOption('[class="form-multiselect block w-full mt-1"]', [
    { index: 0},
    { index: 2 },
    { index: 4 }
  ]);
  await page.waitForTimeout(5000);
});