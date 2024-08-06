import { test, expect } from '@playwright/test';

test('Input Field Test', async ({ page }) => {
  // Entering the URL
  await page.goto('https://letcode.in/edit');

  // Maximize the browser window
  await page.setViewportSize({ width: 1920, height: 1080 }); // we can handle it in "playwright.config.ts" but now it is not working

  // Enter the value in the textbox
  await page.fill('//input[@id="fullName"]', 'Tom Smith');

  // Append text to the input field
  await page.fill('//input[@id="join"]', 'Hello, World!');

  // Simulate pressing the "Tab" key
  await page.keyboard.press('Tab');

  // Get Text from the input field
  const textvalue = await page.inputValue('//input[@id="getMe"]');
  console.log('Text value:', textvalue);

  // Clear text in the input field
  await page.fill('//input[@id="clearMe"]', '');

  // Check if the input field is enabled
  const isEnabled = await page.isDisabled('//input[@id="noEdit"]');
  console.log('Is the input field enabled?', !isEnabled);

  // Check if the text element is read-only by verifying the presence of the "readonly" attribute
  const textElement = page.locator('//input[@id="dontwrite"]');
  const isReadOnly = await textElement.getAttribute('readonly') !== null;
  console.log('Is the text element read-only?', isReadOnly);

  // Get the Confirm text title using 'by text' locator
  const confirmText = await page.locator('text=Confirm text is readonly').textContent();
  console.log('Confirm text:', confirmText);

  // Pause to observe the result (not recommended for real test scripts)
  await page.waitForTimeout(5000);
});