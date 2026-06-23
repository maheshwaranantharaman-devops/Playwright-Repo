import {test} from '@playwright/test';

// test('Handling File Upload',  async({page})=>{
//   await page.goto('https://demoqa.com/upload-download');
//   var url = await page.url();
//   var title = await page.title();
//   console.log(`Page url: ${url}`);
//   console.log(`Page title: ${title}`);
//   await page.setInputFiles('input[id="uploadFile"]', 'E:/playwright_demo/screenshot1.png');
//   await page.waitForTimeout(4000);
// });

test('Handling File Download',  async({page})=>{
  await page.goto('https://demoqa.com/upload-download');
  var url = await page.url();
  var title = await page.title();
  console.log(`Page url: ${url}`);
  console.log(`Page title: ${title}`);
  const [Download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('a[role="button"]').click()
  ])
  await Download.saveAs('E:/playwright_demo/sampleFile.png')
  await page.waitForTimeout(4000);
});