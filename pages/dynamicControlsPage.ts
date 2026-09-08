import { Page, Locator } from "@playwright/test";

export class DynamicControls{

    private readonly page: Page;
    private dynamicControlHeadingLocator : Locator;
    private removeCheckboxButton: Locator;
    private checkbox: Locator;
    private successMessage: Locator;
    private loadingLocator: Locator;
    private addButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.dynamicControlHeadingLocator = this.page.getByRole('heading',{name: 'Dynamic Controls'});
        this.checkbox = this.page.locator('div').filter({has:this.page.getByRole('heading',{name:'Remove/add'})}).locator('#checkbox');
        this.removeCheckboxButton = this.page.getByRole('button',{name:'Remove'});
        this.successMessage = this.page.locator('#message');
        this.loadingLocator = this.page.locator('#loading');
        this.addButton = this.page.getByRole('button',{name: 'Add'});
    }

    isOnDynamicControlsPage(){
        return this.dynamicControlHeadingLocator;
    }
    getCheckbox(){
        return this.checkbox;
    }
    async removeCheckbox(){
        await this.checkbox.click();
        await this.removeCheckboxButton.click();
    }

    getSuccessMessage(){
        return this.successMessage;
    }

    getLoading(){
        return this.loadingLocator;
    }

    getAddButton(){
        return this.addButton;
    }




}