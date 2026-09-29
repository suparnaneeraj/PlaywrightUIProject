import {test, expect} from '../fixture';

test.beforeEach(async({page, homePage})=>{
    await page.goto('/');
    await homePage.goToMenu('Drag and Drop');
})
test('should drag and drop elements successfully', async({dragAndDropPage})=>{
    const pageTitle = 'Drag and Drop';
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