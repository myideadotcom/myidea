import { MyideaRefactoredPage } from './app.po';

describe('myidea-refactored App', function() {
  let page: MyideaRefactoredPage;

  beforeEach(() => {
    page = new MyideaRefactoredPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
