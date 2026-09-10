import {Page, Locator} from '@playwright/test';

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

    async downloadFile(fileName: string ){
        await this.page.getByText(fileName).click();
    }

}