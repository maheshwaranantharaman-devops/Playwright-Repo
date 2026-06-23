import {test} from '@playwright/test';

test('Read Web Table', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/webtables.php'); // replace with your table page

  // Locate all rows
  const rows = page.locator('table[class="table table-striped mt-3"] tr ');
  const rowCount = await rows.count();

  for (let i = 0; i < rowCount; i++) {
    // For each row, locate all columns (td)
    const cols = rows.nth(i).locator('tr');
    const colCount = await cols.count();

    for (let j = 0; j < colCount; j++) {
      const cellText = await cols.nth(j).textContent();
      console.log(`Row ${i}, Col ${j}: ${cellText}`);
    }
  }
});

test('Read Specific COntent From Web Table', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/webtables.php'); // replace with your table page

  // Locate all rows
  const rows = page.locator('table[class="table table-striped mt-3"] tr ').nth(4)

  const column = rows.locator('td').nth(1)

  const columnText = await column.textContent();
  console.log(`Row 5, Col 2: ${columnText.trim()}`);
});