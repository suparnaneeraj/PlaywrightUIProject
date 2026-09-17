import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { FileUpload } from '../pages/fileUploadPage';
import { UploadedFiles } from '../pages/uploadedFilesPage';

test.describe('File upload tests',()=>{

    test.beforeEach(async({page})=>{
        await page.goto('/');
        const homePage = new HomePage(page);
        await homePage.goToFileUploadPage();
    })

    test('should verify if a file is successfully uploaded', async({page})=>{
        const uploadFilePageTitle = 'File Uploader';
        const UploadedFilesPageTitle = 'File Uploaded!'
        const filePath = 'test-data/files/';
        const fileName = 'uploadFile.txt';
        const fileUploadPage = new FileUpload(page);
        await expect(fileUploadPage.getPageTitle()).toHaveText(uploadFilePageTitle);
        const chosenFile = await fileUploadPage.chooseFiles(filePath+fileName);
        expect(chosenFile).toContain(fileName);
        await fileUploadPage.uploadFile();
        const uploadedFilesPage = new UploadedFiles(page);
        await expect(uploadedFilesPage.getPageTitle()).toHaveText(UploadedFilesPageTitle);
        const uploadedFile = uploadedFilesPage.getUploadedFilse();
        await expect(uploadedFile).toHaveText(fileName);
    })

    test('should throw error on clicking upload button without chossing files', async({page})=>{
        const errorMessage = 'Internal Server Error';
        const fileUploadPage = new FileUpload(page);
        const uploadFilePageTitle = 'File Uploader';
        await expect(fileUploadPage.getPageTitle()).toHaveText(uploadFilePageTitle);
        await fileUploadPage.uploadFile();
        const uploadedFilesPage = new UploadedFiles(page);
        await expect(uploadedFilesPage.getPageTitle()).toHaveText(errorMessage);
    })

})