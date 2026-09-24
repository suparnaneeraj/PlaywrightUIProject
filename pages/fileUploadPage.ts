import {Page, Locator} from '@playwright/test';
import { BasePage } from './basePage';

export class FileUpload extends BasePage{

    private fileInput: Locator;
    private uploadButton: Locator;
    private uploadedFile: Locator;

    constructor(page:Page){
        super(page);
        this.fileInput = this.page.locator('#file-upload');
        this.uploadButton = this.page.locator('#file-submit');
        this.uploadedFile = this.page.locator('#uploaded-files');
        
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