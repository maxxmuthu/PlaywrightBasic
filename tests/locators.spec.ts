import { test, expect } from '@playwright/test';

// General Locators
test('Locator Examples', async ({ page }) => {

    // Navigate to the URL
    await page.goto('https://example.com');

    // ID Locator
    const idLocator = page.locator('#elementId');
    await expect(idLocator).toBeVisible();

    // Name Locator
    const nameLocator = page.locator('[name="elementName"]');
    await expect(nameLocator).toBeVisible();

    // XPath Locator
    const xpathLocator = page.locator('//input[@name="q"]'); // Example for a search input field
    await expect(xpathLocator).toBeVisible();

    // CSS Selectors
    const classLocator = page.locator('.className'); // Using class
    await expect(classLocator).toBeVisible();

    const tagLocator = page.locator('input'); // Using tag
    await tagLocator.click();

    const tagWithClassLocator = page.locator('button.className'); // Using tag with class
    await tagWithClassLocator.getByText("Banner");

    const tagWithIdLocator = page.locator('div#elementId'); // Using tag with ID
    await tagWithIdLocator.fill("Test option1");

    const tagWithAttributeLocator = page.locator('input[type="submit"]'); // Using tag with attribute
    await expect(tagWithAttributeLocator).toBeVisible();

})


// getByRole method

/*
The getByRole method in Playwright is a way to locate elements on a page based on their ARIA role and accessible name. 
This approach is part of the Playwright's Locator API, which allows you to query elements 
using a variety of strategies, including role-based queries.

Explanation
ARIA Roles:
ARIA (Accessible Rich Internet Applications) roles describe the purpose or functionality of an element. 
For example, roles like button, link, dialog, etc., are used to define the type of UI element and its behavior.

Accessible Name:
The accessible name is the text or label associated with an element that is announced by screen readers 
and other assistive technologies. For instance, the accessible name for a link might be the text 
that appears between the <a> tags.

Usage of getByRole
The getByRole method helps to locate elements using these roles and names. 
It provides a way to write more descriptive and resilient queries based on how users interact 
with elements, rather than relying solely on CSS selectors or XPath expressions.

getByRole('button'): To find a button element.
getByRole('dialog'): To find a dialog element.
getByRole('heading', { level: 1 }): To find a heading element with a specific level.

*/

// getByRole method will not work if there is no name in DOM html

test('Role-based interaction test', async ({ page }) => {

    // Navigate to the sample page
    await page.goto('https://example.com');

    // Find and interact with a button
    await page.getByRole('button', { name: 'Submit' }).click();

    // Find and interact with a link
    await page.getByRole('link', { name: 'Learn more' }).click();

    // Find and interact with a checkbox
    await page.getByRole('checkbox', { name: 'Subscribe' }).check();

    // Find and interact with a dialog
    await page.getByRole('dialog', { name: 'Confirmation' });

    // Find and interact with a heading
    await page.getByRole('heading', { level: 1, name: 'Welcome' });

    // Find and interact with a textbox
    await page.getByRole('textbox', { name: 'Username' }).fill('myusername');


    // Other ARIA Roles and getByRole Usage in Playwright ----->  

    await page.getByRole('alert'); // Alert
    await page.getByRole('combobox'); // Combobox
    await page.getByRole('document'); // Document
    await page.getByRole('feed'); // Feed
    await page.getByRole('form'); // Form
    await page.getByRole('grid'); // Grid
    await page.getByRole('gridcell'); // Gridcell
    await page.getByRole('list'); // List
    await page.getByRole('listbox'); // Listbox
    await page.getByRole('listitem'); // Listitem
    await page.getByRole('log'); // Log
    await page.getByRole('main'); // Main
    await page.getByRole('marquee'); // Marquee
    await page.getByRole('math'); // Math
    await page.getByRole('menu'); // Menu
    await page.getByRole('menubar'); // Menubar
    await page.getByRole('menuitem'); // Menuitem
    await page.getByRole('menuitemcheckbox'); // Menuitemcheckbox
    await page.getByRole('menuitemradio'); // Menuitemradio
    await page.getByRole('navigation'); // Navigation
    await page.getByRole('note'); // Note
    await page.getByRole('option'); // Option
    await page.getByRole('progressbar'); // Progressbar
    await page.getByRole('radio'); // Radio
    await page.getByRole('radiogroup'); // Radiogroup
    await page.getByRole('region'); // Region
    await page.getByRole('row'); // Row
    await page.getByRole('rowgroup'); // Rowgroup
    await page.getByRole('rowheader'); // Rowheader
    await page.getByRole('scrollbar'); // Scrollbar
    await page.getByRole('search'); // Search
    await page.getByRole('searchbox'); // Searchbox
    await page.getByRole('separator'); // Separator
    await page.getByRole('slider'); // Slider
    await page.getByRole('spinbutton'); // Spinbutton
    await page.getByRole('status'); // Status
    await page.getByRole('switch'); // Switch
    await page.getByRole('tab'); // Tab
    await page.getByRole('tablist'); // Tablist
    await page.getByRole('tabpanel'); // Tabpanel
    await page.getByRole('timer'); // Timer
    await page.getByRole('toolbar'); // Toolbar
    await page.getByRole('tooltip'); // Tooltip
    await page.getByRole('tree'); // Tree
    await page.getByRole('treegrid'); // Treegrid
    await page.getByRole('treeitem'); // Treeitem


  });

 /*
It is particularly useful when:

* You are working with dynamic content where IDs or classes might change.
* You need to ensure that the element has a specific ARIA role, which is essential for accessibility.
* You want to select elements based on their semantic roles rather than their implementation details.

 */

// getByRole method with other locators
  test('Combined Locator Strategies', async ({ page }) => {

      // Navigate to the URL
      await page.goto('https://example.com');

      // ID Locator with getByRole
      await page.locator('#main-content').getByRole('heading', { name: 'Main Content' }); // Heading within the element with ID

      // Name Locator with getByRole
      await page.locator('[name="formContainer"]').getByRole('textbox'); // Textbox within the element with name attribute

      // XPath Locator with getByRole
      await page.locator('//section[@id="features"]').getByRole('button', { name: 'Learn More' }); // Button within the section located by XPath

      // CSS Selector with getByRole
      await page.locator('.menu').getByRole('link', { name: 'Home' }); // Link within the element with class
      await page.locator('form').getByRole('button', { name: 'Submit' }); // Button within the form tag

      // Example actions
      await page.locator('form').getByRole('button', { name: 'Submit' }).click();
      await page.locator('#main-content').getByRole('heading', { name: 'Main Content' }).scrollIntoViewIfNeeded();
      await page.locator('.menu').getByRole('link', { name: 'Home' }).click();

      // Assertions
      await expect(page.locator('#main-content').getByRole('heading', { name: 'Main Content' })).toBeVisible();
      await expect(page.locator('[name="formContainer"]').getByRole('textbox')).toBeEnabled();
      await expect(page.locator('//section[@id="features"]').getByRole('button', { name: 'Learn More' })).toBeVisible();
  });
