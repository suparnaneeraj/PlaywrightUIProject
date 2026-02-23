import {test, Page, Browser, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { TestHelper } from '../util/testHelper';
import { CheckboxPage } from '../pages/checkboxPage';

let page: Page;
let checkbox2Name : string = 'checkbox 2';
let checkbox1Name : string = 'checkbox 1';

test.describe('Verify checkbox functionality',async()=>{
    
    test.beforeEach(async({browser})=>{
        page = await browser.newPage();
        page.goto('/');
    })

    test('should check the checkbox successfully',async()=>{
        const homePage = new HomePage(page);
        await homePage.goToCheckboxesMenu();
        const testHelperPage = new TestHelper(page);
        const checkboxPage = new CheckboxPage(page);
        const pageHeading = await (testHelperPage.getPageHeading()).textContent();
        expect(pageHeading).toEqual('Checkboxes');
        // first we verify if the second checkbox is checked.
        const checkbox2 =  checkboxPage.getCheckbox('checkbox 2');
        await expect(checkbox2).toBeChecked();
        //click on first checkbox
        const checkbox1 = checkboxPage.getCheckbox('checkbox 1')
        await checkbox1.check();
        await expect(checkbox1).toBeChecked();
        

    })

})