import {Page, Locator} from '@playwright/test';

export class FileUpload{

    private readonly page: Page;
    private pageTitle: Locator;
    private fileInput: Locator;
    private uploadButton: Locator;
    private uploadedFile: Locator;

    constructor(page:Page){
        this.page = page;
        this.pageTitle = this.page.getByRole('heading');
        this.fileInput = this.page.locator('#file-upload');
        this.uploadButton = this.page.locator('#file-submit');
        this.uploadedFile = this.page.locator('#uploaded-files');
        
    }

    getPageTitle(){
        return this.pageTitle;
    }

    async chooseFiles(filePath: string){
        await this.fileInput.setInputFiles(filePath);
        const selectedFile = await this.fileInput.inputValue();
        return selectedFile;
    }

    async uploadFile(){
        await this.uploadButton.click();
    }

      getUploadedFilse(){
        return this.uploadedFile;
    }


}