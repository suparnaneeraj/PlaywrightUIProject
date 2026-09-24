import { Page, Locator} from "@playwright/test";

export class BasePage{
    protected readonly page: Page;
    private pageTitle: Locator;

    constructor(page: Page){
        this.page = page;
        this.pageTitle = this.page.getByRole('heading');
    }

    getPageTitle(){
        return this.pageTitle;
    }
}