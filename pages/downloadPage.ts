import {Page, Locator, expect} from '@playwright/test';
import { BasePage } from './basePage';

export class DownloadPage extends BasePage{

    constructor(page: Page){
        super(page);
       
    }

    async getFileByExtension(extension: string){
        return this.page.locator(`a[href$=".${extension}"]`).first().innerText();
       
    }

    async downloadFile(file: string){
        await this.page.getByText(file).click();
    
    }

}