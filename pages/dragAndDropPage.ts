import {Page, Locator} from '@playwright/test';

export class DragAndDrop{

    private readonly page: Page;
    private firstColumn : Locator;
    private secondColumn : Locator;
    private pageTitle : Locator;

    constructor(page: Page){
        this.page = page;
        this.firstColumn = this.page.locator('#column-a');
        this.secondColumn = this.page.locator('#column-b');
        this.pageTitle = this.page.getByRole('heading');
    }

    async dragFirstToSecond(){
       await this.firstColumn.dragTo(this.secondColumn);
    }


    getColumnA(){
        return this.firstColumn;
    }
     getColumnB(){
        return this.secondColumn;
    }

    getPageTitle(){
        return this.pageTitle;
    }

}