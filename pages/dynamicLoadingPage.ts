import {Locator, Page} from '@playwright/test';

export class DynamicLoadingPage{

    private readonly page: Page;
    private hiddenElementExampleLocator: Locator;
    private dynamicLoadingPageTitle: Locator;


    constructor(page:Page){
        this.page = page;
        this.hiddenElementExampleLocator = this.page.getByText('Example 1: Element on page that is hidden');
        this.dynamicLoadingPageTitle = this.page.getByText('Dynamically Loaded Page Elements');

    }

    async goToHiddenElementPage(){
        await this.hiddenElementExampleLocator.click();
    }

    verifyUserOnDynamicLoadingPage(){
        return this.dynamicLoadingPageTitle;
    }


    



}