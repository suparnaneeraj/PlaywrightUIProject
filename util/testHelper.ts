import {Page, Locator} from '@playwright/test';

export class TestHelper{

    private readonly page: Page;
    private pageHeading : Locator;

    constructor(page : Page){
        this.page = page;
        this.pageHeading = this.page.locator('h3');
    }

    getPageHeading(){
        return this.pageHeading;
    }
}