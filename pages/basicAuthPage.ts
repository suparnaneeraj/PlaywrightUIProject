import { Page } from "@playwright/test";
import { Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class BasicAuthPage extends BasePage{

    private successMessage : Locator;
    private bodyText : Locator;


    constructor(page : Page){
        super(page);
        this.successMessage = this.page.locator('p');
        this.bodyText = this.page.locator('body');
    }

    getSuccessMessage(){
        return this.successMessage;
    }

  

    getBodyText(){
        return this.bodyText;
    }
}