import {test, Page, expect} from '@playwright/test';
import { DynamicControls } from '../pages/dynamicControlsPage';
import { HomePage } from '../pages/homePage';

let dynamicControlsPage: DynamicControls;
let homePage: HomePage;

test.describe('Dynamic Controls Tests', ()=>{

    test.beforeEach(async({page})=>{
        await page.goto('');
    })

    test('should verify if a checkbox can be successfully removed',async({page})=>{
        const successMessage = 'It\'s gone!';
        homePage = new HomePage(page);
        await homePage.goToDynamicControls();
        dynamicControlsPage = new DynamicControls(page);
        await expect(dynamicControlsPage.isOnDynamicControlsPage()).toBeVisible();
        await dynamicControlsPage.removeCheckbox();
        await expect(dynamicControlsPage.getLoading()).toBeVisible();
        await expect(dynamicControlsPage.getSuccessMessage()).toHaveText(successMessage);

    })

})