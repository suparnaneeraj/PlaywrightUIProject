import {test as base} from '@playwright/test';
import { HomePage } from './pages/homePage';
import { CheckboxPage } from './pages/checkboxPage';
import { BasicAuthPage } from './pages/basicAuthPage';
import { DownloadPage } from './pages/downloadPage';
import { DragAndDrop } from './pages/dragAndDropPage';
import { FileUpload } from './pages/fileUploadPage';
import { HiddenElementPage } from './pages/hiddenElementPage';
import { DropdownPage } from './pages/dropdownPage';
import { BasePage } from './pages/basePage';
import { DynamicLoadingPage } from './pages/dynamicLoadingPage';
import { DynamicControls } from './pages/dynamicControlsPage';

type PageFixtures = {
    homePage: HomePage;
    checkboxPage: CheckboxPage;
    basicAuthPage: BasicAuthPage;
    downloadPage: DownloadPage;
    dragAndDropPage: DragAndDrop;
    fileUploadPage: FileUpload;
    hiddenElementPage: HiddenElementPage;
    dropdownPage: DropdownPage;
    basePage: BasePage;
    dynamicLoadingPage: DynamicLoadingPage;
    dynamicControlPage: DynamicControls;

}

export const test = base.extend<PageFixtures>({
    homePage: async({page}, use)=>{
        await use(new HomePage(page));
    },
    checkboxPage: async({page}, use)=>{
        await use(new CheckboxPage(page));
    },
    basicAuthPage: async({page}, use)=>{
        await use(new BasicAuthPage(page));
    },
    downloadPage: async({page}, use)=>{
        await use(new DownloadPage(page));
    },
    dragAndDropPage: async({page}, use)=>{
        await use(new DragAndDrop(page));
    },
    fileUploadPage: async({page}, use)=>{
        await use(new FileUpload(page));
    },
    dropdownPage: async({page}, use)=>{
        await use(new DropdownPage(page));
    },
    dynamicControlPage: async({page}, use)=>{
        await use(new DynamicControls(page));
    },
    dynamicLoadingPage: async({page}, use)=>{
        await use(new DynamicLoadingPage(page));
    },
    basePage: async({page}, use)=>{
        await use(new BasePage(page));
    },
    hiddenElementPage: async({page}, use)=>{
        await use(new HiddenElementPage(page));
    },

});
export {expect} from '@playwright/test';