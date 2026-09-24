import {test, expect, Page} from '@playwright/test';
import { Browser } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { BasicAuthPage } from '../pages/basicAuthPage';
import { TestHelper } from '../util/testHelper';

let page : Page;
let homePage : HomePage;
let basicAuthPage : BasicAuthPage;
let testHelper : TestHelper;
const username = process.env.USERNAME!;
const password = process.env.PASSWORD!;


test('should successfully sign in to the application with valid credentials', async({browser})=>{

    const context = await browser.newContext({
        httpCredentials: {
            username: username,
            password: password,
        },
    });
    page = await context.newPage();
    await page.goto('/');
    homePage = new HomePage(page);
    basicAuthPage = new BasicAuthPage(page);
    testHelper = new TestHelper(page);
    await homePage.goToMenu('Basic Auth');
    const pageHeading = await (testHelper.getPageHeading()).textContent();
    const successMessage = await (basicAuthPage.getSuccessMessage()).textContent();
    expect(pageHeading).toBe('Basic Auth');
    expect(successMessage).toContain('Congratulations');

})
test('should throw error message on invalid credentials', async({browser})=>{

    const context = await browser.newContext({
        httpCredentials: {
            username: username + '1',
            password: password + '1',
        },
    });
    page = await context.newPage();
    await page.goto('/');
    homePage = new HomePage(page);
    basicAuthPage = new BasicAuthPage(page);
    await homePage.goToMenu('Basic Auth');
    const bodyText = await (basicAuthPage.getBodyText()).textContent();
    expect(bodyText).toContain('Not authorized');
   
})