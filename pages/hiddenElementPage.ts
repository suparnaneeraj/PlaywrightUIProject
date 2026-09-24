import {Page, Locator} from '@playwright/test';
import { BasePage } from './basePage';

export class HiddenElementPage extends BasePage{

    private startButton: Locator;
    private hiddenElementPageTitle: Locator;
    private loadingLocator: Locator;
    private hiddenTextLocator: Locator;

    constructor(page: Page){
        super(page)
        this.startButton = this.page.getByRole('button', {name: 'Start'});
        this.hiddenElementPageTitle = this.page.getByRole('heading',{name:'Example 1: Element on page that is hidden'});
        this.loadingLocator = this.page.locator('#loading');
        this.hiddenTextLocator = this.page.locator('div#finish').getByRole('heading');
    }

    async clickStartToUnhide(){
        await this.startButton.click();
    }


    verifyHiddenElementPageTitle(){
        return this.hiddenElementPageTitle;
    }

    getLoading(){
        return this.loadingLocator;
    }

    getHiddenText(){
        return this.hiddenTextLocator;
    }

}