import {test, expect} from '../fixture';

const valueToChoose = 'Option 2';
const nextOption = 'Option 1';
test.describe("should verify the dropdown functionality", async()=>{

    test.beforeEach(async({homePage, page})=>{
        await page.goto('/');
        await homePage.goToMenu('Dropdown');
    })

    test('should select an option from the dropdown', async({basePage, dropdownPage})=>{
        const pageHeading = await (basePage.getPageTitle()).textContent();
        expect(pageHeading).toEqual('Dropdown List');
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