import { test } from '@playwright/test'

// test('Handle SAP Hybris Iframe', async ({ page }) => {
//   await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
//   const frame = page.frameLocator('iframe[class=" lazyloaded"]');
//   await frame.locator('//h3[text()="SAP Hybris Training"]').click();
//   await page.waitForTimeout(2000);
// });

// test('Handle JMeter Training Iframe', async ({ page }) => {
//   await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
//   const frame = page.frameLocator('iframe[class=" lazyloaded"]');
//   await frame.locator('//h3[text()="JMeter Training"]').click();   
//   await page.waitForTimeout(2000);
// });

// test('Handle Multiple iframes', async({page})=>{
//   await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
//   const outerframe = page.frameLocator('#frm3')
//   const innerframeTwo = outerframe.frameLocator('#frm2')
//   await innerframeTwo.locator('#firstName').fill('Hello')
//   await innerframeTwo.locator('#lastName').fill('Hiii!')
//   await innerframeTwo.locator('#malerb').check()
//   await innerframeTwo.locator('#hindichbx').check()
// });

// test('Handle Multiple iframes', async({page})=>{
//   await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
//   const outerframe = page.frameLocator('#frm3')
//   const innerframeOne = outerframe.frameLocator('#frm1')
//   await innerframeOne.locator('#selectnav1').selectOption({ label: 'Tech News' });
// });

test('Handle Mouse Actions', async ({page})=>{
   await page.goto('https://demoqa.com/buttons');
   await page.locator('#doubleClickBtn').dblclick();
   await page.waitForTimeout(4000);
   await page.locator('#rightClickBtn').click({button:'right'});
   await page.waitForTimeout(4000);
   await page.mouse.wheel(0,2000);
   await page.waitForTimeout(4000);
});

test('Drag and Drop', async ({page})=>{
   await page.goto('https://jqueryui.com/droppable');
   const frame = await page.frameLocator('.demo-frame');
   await frame.locator('#draggable').dragTo(await frame.locator('#droppable'));
   await page.waitForTimeout(4000);
});