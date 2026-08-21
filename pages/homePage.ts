import {Page} from '@playwright/test';
import { Locator } from '@playwright/test';

export class HomePage{

    private readonly page: Page;
    private basicAuthLinkLocator : Locator;
    private DropdownLinkLocator : Locator;
    private checkboxLinkLocator :   Locator;
    private dropdownMenu : Locator;
    private fileUploadMenu : Locator;
    private dynamicControlMenu : Locator;


    constructor(page: Page){
        this.page = page;
        this.basicAuthLinkLocator = page.getByText('Basic Auth');
        this.DropdownLinkLocator = page.getByText('Dropdown');
        this.checkboxLinkLocator = page.getByText('Checkboxes');
        this.dropdownMenu = page.getByText('Dropdown');
        this.fileUploadMenu = page.getByText('File Upload');
        this.dynamicControlMenu = page.getByText('Dynamic Controls');

    }

    async goToBasicAuthMenu(){
        await this.basicAuthLinkLocator.click();
    }

    async goToCheckboxesMenu(){
        await this.checkboxLinkLocator.click();
    }
    
    async goToDropdownMenu(){
        await this.dropdownMenu.click();
    }

    async goToFileUploadMenu(){
        await this.fileUploadMenu.click()
    }

    async goToDynamicControls(){
        await this.dynamicControlMenu.click();
    }


    

}