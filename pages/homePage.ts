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
    private dynamicLoadingMenu : Locator;
    private dragAndDropMenu :  Locator;
    private downloadMenu: Locator;

    constructor(page: Page){
        this.page = page;
        this.basicAuthLinkLocator = this.page.getByText('Basic Auth');
        this.DropdownLinkLocator = this.page.getByText('Dropdown');
        this.checkboxLinkLocator = this.page.getByText('Checkboxes');
        this.dropdownMenu = this.page.getByText('Dropdown');
        this.fileUploadMenu = this.page.getByText('File Upload');
        this.dynamicControlMenu = this.page.getByText('Dynamic Controls');
        this.dynamicLoadingMenu = this.page.getByText('Dynamic Loading');
        this.dragAndDropMenu = this.page.getByText('Drag and Drop');
        this.downloadMenu = this.page.getByText('File Download',{exact:true});
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

    async goToDynamicControlsPage(){
        await this.dynamicControlMenu.click();
    }

    async goToDynamicLoadingPage(){
        await this.dynamicLoadingMenu.click();
    }

    async goToDragAndDropPage(){
        await this.dragAndDropMenu.click();
    }

    async goToFileDownloadPage(){
        await this.downloadMenu.click();
    }
    

}