import {test, expect} from '../fixture';

test.describe('Dynamic Loading Tests', async()=>{
    test.beforeEach(async({page, homePage})=>{
        await page.goto('/');  
        await homePage.goToMenu('Dynamic Loading');

    })
    test('should verify if the hidden element is displayed on clicking', async({dynamicLoadingPage, hiddenElementPage})=>{
        const hiddenText = 'Hello World!';
        await expect(dynamicLoadingPage.verifyUserOnDynamicLoadingPage()).toBeVisible();
        await dynamicLoadingPage.goToHiddenElementPage(); 
        await expect(hiddenElementPage.verifyHiddenElementPageTitle()).toBeVisible();
        await hiddenElementPage.clickStartToUnhide();
        await expect(hiddenElementPage.getLoading()).toBeVisible();
        await expect(hiddenElementPage.getLoading()).not.toBeVisible({timeout:7000});
        await expect(hiddenElementPage.getHiddenText()).toHaveText(hiddenText);
    })
})