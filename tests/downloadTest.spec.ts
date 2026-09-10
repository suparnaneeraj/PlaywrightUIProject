import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { DownloadPage } from '../pages/downloadPage';
import fs from 'fs';

const files =[  {name: 'browserContextPage.spec.ts', type: 'ts'},
                {name: 'playwright-practice-17475926855191081544.txt', type: 'txt'}, 
                {name: 'Screenshot from 2026-09-10 15-29-53.png', type: 'png'}, 
                {name: 'file_1789040183564.pdf', type: 'pdf'},
                {name : '015-map-1.1.jpg', type: 'jpg'}
            ];
test.beforeEach(async({page})=>{
    await page.goto('/');
    const homePage= new HomePage(page);
    await homePage.goToFileDownloadPage();


})
test(`should download the file successfully`, async({page})=>{
        const downloadPage = new DownloadPage(page);
        await expect(downloadPage.getPageTitle()).toHaveText('File Downloader');
        for(const file of files){
            const downloadPromise = page.waitForEvent('download'); // asks playwright to start listening to the event download or to detect an event download
            await downloadPage.downloadFile(file.name);  // clicks the file to download
            const download = await downloadPromise; // wait for playwright to receive the download event and gets the download object
            expect(download.suggestedFilename()).toBe(file.name); // verifies if the downloaded file name is as expected
            const filePath = `downloads/${file.name}`; 
            await download.saveAs(filePath); // saves the file in this path
            expect(fs.existsSync(filePath)).toBe(true); // fs is the node js file system module . existsSync checks if the file exist in the given filepath
        }
       
})

test(`should verify if the downloaded  file is not empty`, async({page})=>{
    const downloadPage = new DownloadPage(page);
    const downloadPromise = page.waitForEvent('download');  
    for(const file of files){
        await downloadPage.downloadFile(file.name);
        const download = await downloadPromise;
        const filePath = `downloads/${file.name}`; 
        await download.saveAs(filePath); // saves the file in this path
        const fileStats = fs.statSync(filePath); // statSync gives information about the file like size, file/directory etc
        expect(fileStats.size).toBeGreaterThan(0);
    }
 
})




