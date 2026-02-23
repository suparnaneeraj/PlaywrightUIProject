import {Page, Locator} from '@playwright/test';

export class DropdownPage{

    private readonly page : Page;
    private selectedDropdownValue : Locator;
    private dropdownOptions : Locator;

    constructor(page : Page){
        this.page = page;
        this.dropdownOptions = this.page.getByRole('combobox');
        this.selectedDropdownValue = this.page.locator('option:checked');
    }

    async getValueInDropdown(optionToChoose? : string){
        if(optionToChoose){
            await this.dropdownOptions.selectOption({label: optionToChoose});
        }
        return this.selectedDropdownValue;
    }







}