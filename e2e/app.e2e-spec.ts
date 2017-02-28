import { ConferencesPage } from './app.po';

describe('conferences App', () => {
  let page: ConferencesPage;

  beforeEach(() => {
    page = new ConferencesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
