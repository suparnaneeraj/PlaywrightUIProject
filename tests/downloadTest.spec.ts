import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { DownloadPage } from '../pages/downloadPage';
import fs from 'fs';

const fileTypes =['txt','png', 'pdf']
test.beforeEach(async({page})=>{
    await page.goto('/');
    const homePage= new HomePage(page);
    await homePage.goToMenu('File Download');


})
test(`should download the file successfully`, async({page})=>{
        const downloadPage = new DownloadPage(page);
        await expect(downloadPage.getPageTitle()).toHaveText('File Downloader');
        for(const type of fileTypes){
            const fileName = await downloadPage.getFileByExtension(type);    // get the first file with given extension
            const downloadPromise = page.waitForEvent('download'); // asks playwright to start listening to the event download or to detect an event download
            await downloadPage.downloadFile(fileName);      // clicks the file to download
            const download = await downloadPromise; // wait for playwright to receive the download event and gets the download object
            expect(download.suggestedFilename()).toBe(fileName); // verifies if the downloaded file name is as expected
            const filePath = `downloads/${fileName}`; 
            await download.saveAs(filePath); // saves the file in this path
            expect(fs.existsSync(filePath)).toBe(true); // fs is the node js file system module . existsSync checks if the file exist in the given filepath
        }
       
})

test(`should verify if the downloaded  file is not empty`, async({page})=>{
    const downloadPage = new DownloadPage(page);
    for(const type of fileTypes){
        const fileName = await downloadPage.getFileByExtension(type);
        const downloadPromise = page.waitForEvent('download');  
        await downloadPage.downloadFile(fileName);
        const download = await downloadPromise;
        const filePath = `downloads/${fileName}`; 
        await download.saveAs(filePath); // saves the file in this path
        const fileStats = fs.statSync(filePath); // statSync gives information about the file like size, file/directory etc
        expect(fileStats.size).toBeGreaterThan(0);
    }
 
})




