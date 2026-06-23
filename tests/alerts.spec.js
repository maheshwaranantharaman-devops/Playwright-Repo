import {test} from '@playwright/test';

// test('Simple alert',  async({page})=>{
//   await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
//   page.on('dialog', (dialogForAlert)=>{
//     dialogForAlert.accept()
//     console.log(dialogForAlert.message())
//     console.log(dialogForAlert.type())
//   })
//   await page.locator('//button[text()="Click for JS Alert"]').click();
//   await page.waitForTimeout(5000);
// });

// test('Cancel and Confirm Alert', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

//   page.on('dialog', async (dialog) => {
//     console.log(dialog.message());
//     console.log(dialog.type());

//     if (dialog.type() === "confirm") {
//       await dialog.accept();
//     } 
//     else {
//       await dialog.dismiss();
//     }
//   });

//   await page.getByText('Click for JS Confirm').click();
//   await page.waitForTimeout(2000);
// });


// test('Prompt alert', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

//   page.on('dialog', async (dialog) => {
//     console.log(dialog.message());
//     console.log(dialog.type());

//     if (dialog.type() === "confirm") {
//       await dialog.accept('Hello This is Prompt');
//     } 
//     else {
//       await dialog.dismiss();
//     }
//   });

//   await page.locator('//button[text()="Click for JS Prompt"]').click();
//   await page.waitForTimeout(2000);
// });