import {Page, Locator} from '@playwright/test';

export class UploadedFiles{

    private readonly page : Page;
    private pageTitle : Locator;
    private uploadedFile: Locator;

    constructor(page: Page){
        this.page = page;
        this.pageTitle = this.page.getByRole('heading');
        this.uploadedFile = this.page.locator('#uploaded-files');
    }

    getPageTitle(){
        return this.pageTitle;
    }

    getUploadedFilse(){
        return this.uploadedFile;
    }

}