import {test, expect} from '../fixture';

test.describe('Dynamic Controls Tests', ()=>{

    test.beforeEach(async({page})=>{
        await page.goto('/');
    })

    test('should verify if a checkbox can be successfully removed',async({homePage, dynamicControlPage})=>{
        const successMessage = 'It\'s gone!';
        await homePage.goToMenu('Dynamic Controls');
        await expect(dynamicControlPage.isOnDynamicControlsPage()).toBeVisible();
        await expect(dynamicControlPage.getCheckbox()).toBeVisible();
        await dynamicControlPage.removeCheckbox();
        await expect(dynamicControlPage.getLoading()).toBeVisible();
        await expect(dynamicControlPage.getSuccessMessage()).toHaveText(successMessage);
        await expect(dynamicControlPage.getCheckbox()).not.toBeVisible();
        await expect(dynamicControlPage.getAddButton()).toBeVisible();
    })

})