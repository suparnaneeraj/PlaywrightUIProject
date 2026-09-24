import {Page} from '@playwright/test';
import { Locator } from '@playwright/test';
import { BasePage } from './basePage';


export class HomePage extends BasePage{


    constructor(page: Page){
       super(page)
    }

    async goToMenu(menuName: string){
        await this.page.getByText(menuName,{exact:true}).click();
    }

   
}