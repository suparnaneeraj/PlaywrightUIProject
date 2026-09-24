import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class CheckboxPage extends BasePage{

    private checkBoxLocator :  Locator;

    constructor(page : Page){
        super(page);
        this.checkBoxLocator =  this.page.locator('#checkboxes input[type="checkbox"]');
    }
    
    getCheckbox(checkboxName : string){
        const index = checkboxName === 'checkbox 1' ? 0 : 1;
        return this.checkBoxLocator.nth(index);
    }

}