import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../Config/loginPage';

test.describe.parallel('Product Flow Test', () => {
    test('MyTest', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.automationPage();

        // Accept consent for data usage
        await loginPage.consentDialog();

        // Login with existing user
        //await loginPage.loginIn();

        // Navigate to Products > Men > T-shirts
        await page.getByRole('link', { name: 'Products' }).click();
        await page.getByRole('link', { name: ' Men' }).click();
        await page.getByRole('link', { name: 'Tshirts' }).click();

        // Add a T-shirt to cart, confirm it is added, and continue shopping
        await page.locator('div:nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click();
        await page.getByRole('button', { name: ' Add to cart' }).click();
        await expect(page.getByText('Your product has been added to cart. View Cart')).toBeVisible();
        const continueShopping = page.getByRole('button', { name: 'Continue Shopping' });
        await expect(continueShopping).toBeVisible();
        await continueShopping.click();

        // Navigate to Products > Men > Jeans
        await page.getByRole('link', { name: ' Men' }).click();
        await page.getByRole('link', { name: 'Jeans' }).click();


        // View the Jeans and change quantity to 2
        await page.getByRole('link', { name: ' View Product' }).first().click();
        await page.locator('#quantity').fill('2');

        // Add to cart
        await page.getByRole('button', { name: ' Add to cart' }).click();
        await expect(page.getByText('Your product has been added to cart. View Cart')).toBeVisible();
        await continueShopping.click();

        // Click Cart
        await page.getByRole('link', { name: ' Cart' }).click();

        // Confirm products are in cart and verify pricing        
        await expect(page.getByText('Pure Cotton V-Neck T-Shirt Men > Tshirts Rs. 1299 1 Rs. 1299')).toBeVisible();
        await expect(page.getByText('Soft Stretch Jeans Men > Jeans Rs. 799 2 Rs. 1598')).toBeVisible();

        // Delete the 2 Jeans from the Cart
        await page.locator('#product-33').getByRole('cell', { name: '' }).locator('a').click();

        // Proceed to checkout
        await page.getByText('Proceed To Checkout').click();

        // Confirm login or registration is required
        await expect(page.getByText('Register / Login account to')).toBeVisible();

//If you want the test to confirm with a logged in user remove the "//" on line 13 and remove line 55 & 56 (account has to exisct before hand parameters to be inserted under the loginPage.ts > LogIn details)

    });
});
