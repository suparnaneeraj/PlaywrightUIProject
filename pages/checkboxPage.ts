import { Page, Locator } from "@playwright/test";

export class CheckboxPage{

    private readonly page : Page;
    private checkBoxLocator :  Locator;

    constructor(page : Page){
        this.page = page;
        this.checkBoxLocator =  this.page.locator('#checkboxes input[type="checkbox"]');
    }
    
    getCheckbox(checkboxName : string){
        const index = checkboxName === 'checkbox 1' ? 0 : 1;
        return this.checkBoxLocator.nth(index);
    }

}