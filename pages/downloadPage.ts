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

    async downloadFile(fileName: string ){
        const fileLocator=this.page.getByText(fileName);
        await expect(fileLocator).toBeVisible();
        await fileLocator.click();
    }

}