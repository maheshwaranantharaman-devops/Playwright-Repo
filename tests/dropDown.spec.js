import {test} from '@playwright/test';

test('Handling Dropdown By Text',  async({page})=>{
  await page.goto('https://testautomationcentral.com/demo/dropdown.html');
  var url = await page.url();
  var title = await page.title();
  console.log(`Page url: ${url}`);
  console.log(`Page title: ${title}`);
  await page.screenshot({path:'./screenshot1.png'});
  await page.selectOption('div[id="simple-dropdown"] select', {text:'Option 1'});
  await page.waitForTimeout(5000);
});

test('Handling Dropdown By Value',  async({page})=>{
  await page.goto('https://testautomationcentral.com/demo/dropdown.html');
  var url = await page.url();
  var title = await page.title();
  console.log(`Page url: ${url}`);
  console.log(`Page title: ${title}`);
  await page.screenshot({path:'./screenshot1.png'});
  await page.selectOption('div[id="simple-dropdown"] select', {value:'option2'});
  await page.waitForTimeout(5000);
});

test('Handling Dropdown By Index',  async({page})=>{
  await page.goto('https://testautomationcentral.com/demo/dropdown.html');
  var url = await page.url();
  var title = await page.title();
  console.log(`Page url: ${url}`);
  console.log(`Page title: ${title}`);
  await page.screenshot({path:'./screenshot1.png'});
  await page.selectOption('div[id="simple-dropdown"] select', {index:2});
  await page.waitForTimeout(5000);
});

