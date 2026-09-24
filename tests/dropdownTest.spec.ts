import {Page, test, Browser, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { TestHelper } from '../util/testHelper';
import { DropdownPage } from '../pages/dropdownPage';

let page : Page;
const valueToChoose = 'Option 2';
const nextOption = 'Option 1';
test.describe("should verify the dropdown functionality", async()=>{

    test.beforeEach(async({browser})=>{
        page = await browser.newPage();
        await page.goto('/');
        const homePage = new HomePage(page);
        homePage.goToMenu('Dropdown');
    })

    test('should select an option from the dropdown', async()=>{
        
        const testHelper = new TestHelper(page);
        const pageHeading = await (testHelper.getPageHeading()).textContent();
        expect(pageHeading).toEqual('Dropdown List');
        const dropdownPage = new DropdownPage(page);
        //verify the default value selected
        const defaultValueSelected = await (await dropdownPage.getValueInDropdown()).textContent();
        expect(defaultValueSelected).toEqual('Please select an option');

        //choose a value from dropdown and verify if the value is selected
        const valueChosen = await (await dropdownPage.getValueInDropdown(valueToChoose)).textContent();
        expect(valueChosen).toEqual(valueToChoose);

        //again choose another option
        const nextChosenValue = await (await dropdownPage.getValueInDropdown(nextOption)).textContent();
        expect(nextChosenValue).toEqual(nextOption);

    })
})