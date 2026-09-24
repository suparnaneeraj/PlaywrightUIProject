import {Page, Locator} from '@playwright/test';
import { BasePage } from './basePage';

export class DragAndDrop extends BasePage{

    private firstColumn : Locator;
    private secondColumn : Locator;

    constructor(page: Page){
        super(page);
        this.firstColumn = this.page.locator('#column-a');
        this.secondColumn = this.page.locator('#column-b');
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
}