import {test, expect} from '../fixture';

let checkbox2Name : string = 'checkbox 2';
let checkbox1Name : string = 'checkbox 1';

test.describe('Verify checkbox functionality',async()=>{
    
    test.beforeEach(async({page})=>{
        page.goto('/');
    })

    test('should check the checkbox successfully',async({checkboxPage, homePage, basePage})=>{
        await homePage.goToMenu('Checkboxes');
        const pageHeading = await (basePage.getPageTitle()).textContent();
        expect(pageHeading).toEqual('Checkboxes');
        // first we verify if the second checkbox is checked.
        const checkbox2 =  checkboxPage.getCheckbox(checkbox2Name);
        await expect(checkbox2).toBeChecked();
        //click on first checkbox
        const checkbox1 = checkboxPage.getCheckbox(checkbox1Name)
        await checkbox1.check();
        await expect(checkbox1).toBeChecked();
    

    })

})