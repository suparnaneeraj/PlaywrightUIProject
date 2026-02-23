import { Page } from "@playwright/test";
import { Locator } from "@playwright/test";

export class BasicAuthPage{

    private readonly page : Page;
    private successMessage : Locator;
    private bodyText : Locator;


    constructor(page : Page){
        this.page = page;
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