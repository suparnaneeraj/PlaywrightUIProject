import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { BasePage } from '../pages/basePage';
import { BasicAuthPage } from '../pages/basicAuthPage';

const username = process.env.USERNAME!;
const password = process.env.PASSWORD!;


test('should successfully sign in to the application with valid credentials', async ({ browser }) => {

    const context = await browser.newContext({
        httpCredentials: {
            username,
            password,
        },
    });

    const page = await context.newPage();
    const homePage = new HomePage(page);
    const basicAuthPage = new BasicAuthPage(page);
    const basePage = new BasePage(page);
    await page.goto('/');
    await homePage.goToMenu('Basic Auth');
    await expect(basePage.getPageTitle()).toHaveText('Basic Auth');
    await expect(basicAuthPage.getSuccessMessage()).toContainText('Congratulations');
    await context.close();
});

test('should throw error message on invalid credentials',async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials: {
            username: username + '1',
            password: password + '1',
        },
    });
    const page = await context.newPage();
    const homePage = new HomePage(page);
    const basicAuthPage = new BasicAuthPage(page);
    await page.goto('/');
    await homePage.goToMenu('Basic Auth');
    await expect(basicAuthPage.getBodyText()).toContainText('Not authorized');
    await context.close();
});