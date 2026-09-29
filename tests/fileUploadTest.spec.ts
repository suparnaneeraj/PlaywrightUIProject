import {test, expect} from '../fixture';

test.describe('File upload tests',()=>{

    test.beforeEach(async({page, homePage})=>{
        await page.goto('/');
        await homePage.goToMenu('File Upload');
    })

    test('should verify if a file is successfully uploaded', async({fileUploadPage})=>{
        const uploadFilePageTitle = 'File Uploader';
        const UploadedFilesPageTitle = 'File Uploaded!'
        const filePath = 'test-data/files/';
        const fileName = 'uploadFile.txt';
        await expect(fileUploadPage.getPageTitle()).toHaveText(uploadFilePageTitle);
        const chosenFile = await fileUploadPage.chooseFiles(filePath+fileName);
        expect(chosenFile).toContain(fileName);
        await fileUploadPage.uploadFile();
        await expect(fileUploadPage.getPageTitle()).toHaveText(UploadedFilesPageTitle);
        const uploadedFile = fileUploadPage.getUploadedFilse();
        await expect(uploadedFile).toHaveText(fileName);
    })

    test('should throw error on clicking upload button without chossing files', async({fileUploadPage})=>{
        const errorMessage = 'Internal Server Error';
        const uploadFilePageTitle = 'File Uploader';
        await expect(fileUploadPage.getPageTitle()).toHaveText(uploadFilePageTitle);
        await fileUploadPage.uploadFile();
        await expect(fileUploadPage.getPageTitle()).toHaveText(errorMessage);
    })

    test('should verify if the chosen file can be changed into a new file', async({fileUploadPage})=>{
        const uploadFilePageTitle = 'File Uploader';
        const filePath = 'test-data/files/';
        const fileName = 'uploadFile.txt';
        const newFileName = 'uploadFileNew.txt';
        await expect(fileUploadPage.getPageTitle()).toHaveText(uploadFilePageTitle);
        const chosenFile = await fileUploadPage.chooseFiles(filePath+fileName);
        expect(chosenFile).toContain(fileName);
        const updatedChosenFile = await fileUploadPage.chooseFiles(filePath+newFileName);
        expect(updatedChosenFile).toContain(newFileName);

    })

})