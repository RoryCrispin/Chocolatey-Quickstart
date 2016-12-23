import { NewAppPage } from './app.po';

describe('Chocolatey-Quickstart App', function() {
  let page: NewAppPage;

  beforeEach(() => {
    page = new NewAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
