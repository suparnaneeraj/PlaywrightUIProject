import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { DragAndDrop } from '../pages/dragAndDropPage';

test.beforeEach(async({page})=>{
    await page.goto('/');
    const homePage= new HomePage(page);
    await homePage.goToDragAndDropPage();
})
test('should drag and drop elements successfully', async({page})=>{
    const pageTitle = 'Drag and Drop';
    const dragAndDropPage = new DragAndDrop(page);
    await expect(dragAndDropPage.getPageTitle()).toHaveText(pageTitle);
    await expect(dragAndDropPage.getColumnA()).toHaveText('A');
    await expect(dragAndDropPage.getColumnB()).toHaveText('B');
    await dragAndDropPage.dragFirstToSecond();
    await expect(dragAndDropPage.getColumnA()).toHaveText('B');
    await expect(dragAndDropPage.getColumnB()).toHaveText('A');
    await dragAndDropPage.dragFirstToSecond();
    await expect(dragAndDropPage.getColumnA()).toHaveText('A');
    await expect(dragAndDropPage.getColumnB()).toHaveText('B');

})