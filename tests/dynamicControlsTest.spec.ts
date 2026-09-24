import {test, expect} from '@playwright/test';
import { DynamicControls } from '../pages/dynamicControlsPage';
import { HomePage } from '../pages/homePage';

let dynamicControlsPage: DynamicControls;
let homePage: HomePage;

test.describe('Dynamic Controls Tests', ()=>{

    test.beforeEach(async({page})=>{
        await page.goto('/');
    })

    test('should verify if a checkbox can be successfully removed',async({page})=>{
        const successMessage = 'It\'s gone!';
        homePage = new HomePage(page);
        await homePage.goToMenu('Dynamic Controls');
        dynamicControlsPage = new DynamicControls(page);
        await expect(dynamicControlsPage.isOnDynamicControlsPage()).toBeVisible();
        await expect(dynamicControlsPage.getCheckbox()).toBeVisible();
        await dynamicControlsPage.removeCheckbox();
        await expect(dynamicControlsPage.getLoading()).toBeVisible();
        await expect(dynamicControlsPage.getSuccessMessage()).toHaveText(successMessage);
        await expect(dynamicControlsPage.getCheckbox()).not.toBeVisible();
        await expect(dynamicControlsPage.getAddButton()).toBeVisible();
    })

})