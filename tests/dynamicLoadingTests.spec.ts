import {test, expect, Page} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { DynamicLoadingPage } from '../pages/dynamicLoadingPage';
import { HiddenElementPage } from '../pages/hiddenElementPage';

let homePage : HomePage;
let dynamicLoadingPage : DynamicLoadingPage;
let hiddenElementPage : HiddenElementPage;  
test.describe('Dynamic Loading Tests', async()=>{
    test.beforeEach(async({page})=>{
        await page.goto('/');  
        homePage = new HomePage(page);
        await homePage.goToMenu('Dynamic Loading');

    })
    test('should verify if the hidden element is displayed on clicking', async({page})=>{
        const hiddenText = 'Hello World!';
        dynamicLoadingPage = new DynamicLoadingPage(page);
        await expect(dynamicLoadingPage.verifyUserOnDynamicLoadingPage()).toBeVisible();
        await dynamicLoadingPage.goToHiddenElementPage();  
        hiddenElementPage = new HiddenElementPage(page);
        await expect(hiddenElementPage.verifyHiddenElementPageTitle()).toBeVisible();
        await hiddenElementPage.clickStartToUnhide();
        await expect(hiddenElementPage.getLoading()).toBeVisible();
        await expect(hiddenElementPage.getLoading()).not.toBeVisible({timeout:7000});
        await expect(hiddenElementPage.getHiddenText()).toHaveText(hiddenText);
    })
})