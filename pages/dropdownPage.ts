import {Page, Locator} from '@playwright/test';
import { BasePage } from './basePage';

export class DropdownPage extends BasePage{

    private selectedDropdownValue : Locator;
    private dropdownOptions : Locator;

    constructor(page : Page){
        super(page);
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