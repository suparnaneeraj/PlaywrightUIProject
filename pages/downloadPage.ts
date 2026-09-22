import {Page, Locator, expect} from '@playwright/test';

export class DownloadPage{

    private readonly page: Page;
    private pageTitle: Locator;
   

    constructor(page: Page){
        this.page= page;
        this.pageTitle = this.page.getByRole('heading');
       
    }

    getPageTitle(){
        return this.pageTitle;
    }

    async getFileByExtension(extension: string){
        return this.page.locator(`a[href$=".${extension}"]`).first().innerText();
       
    }

    async downloadFile(file: string){
        await this.page.getByText(file).click();
    
    }

}