import {test} from '@playwright/test';

// test('Launching demo qa test',  async({page})=>{
//   await page.goto('https://demoqa.com/text-box');
//   var url = await page.url();
//   var title = await page.title();
//   console.log(`Page url: ${url}`);
//   console.log(`Page title: ${title}`);
//   await page.locator('#userName').fill('Hello');
//   await page.locator('#userEmail').fill('John');
//   await page.locator('#currentAddress').fill('123 Abc Street Defghi lmnop-600001');
//   await page.locator('#permanentAddress').fill('123 Abc Street Defghi lmnop-600001');
// });

test('Launching demo qa test',  async({page})=>{
  await page.goto('https://demoqa.com/automation-practice-form');
  var url = await page.url();
  var title = await page.title();
  console.log(`Page url: ${url}`);
  console.log(`Page title: ${title}`);
  await page.locator('input[placeholder="First Name"]').fill('Hello');
  await page.locator('input[placeholder="Last Name"]').fill('Hello');
  await page.locator('input[placeholder="name@example.com"]').fill('John');
  await page.locator('input[value="Female"]').click(); 
  await page.locator('input[placeholder="Mobile Number"]').fill('1234567890'); 
  await page.locator('div[class="react-datepicker__input-container"] input').fill('05 Jun 2026'); 
  await page.locator('input[id="hobbies-checkbox-2"]').click();
  await page.locator('textarea[placeholder="Current Address"]').fill('123 Abc Street Defghi lmnop-600001');
  await page.locator('button[type="submit"]').click();
});