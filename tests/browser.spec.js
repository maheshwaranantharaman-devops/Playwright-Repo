import {chromium, test} from '@playwright/test';

test('Executing page navigators',  async({})=>{
  const browser = await chromium.launch()
  const context = await browser.newContext({
    recordVideo:{
      dir:'./record/contextScreenRecording'
    }
  });
  const pageOne = await context.newPage();
  await pageOne.goto('https://www.amazon.com/');
  const pageTwo = await context.newPage();
  await pageTwo.goto('https://www.flipkart.com/');
  const pageThree = await context.newPage();
  await pageThree.goto('https://www.myntra.com/'); 
})