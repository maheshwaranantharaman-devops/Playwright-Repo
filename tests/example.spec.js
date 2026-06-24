import {test} from '@playwright/test';

test('Launching amazon',  async({page})=>{
  await page.goto('https://www.myntra.com/');
  var url = await page.url();
  var title = await page.title();
  console.log(`Page url: ${url}`);
  console.log(`Page title: ${title}`);
  await page.screenshot({path:'./screenshot1.png'});
});

