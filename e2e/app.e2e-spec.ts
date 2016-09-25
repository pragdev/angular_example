import { AngularExamplePage } from './app.po';

describe('angular-example App', function() {
  let page: AngularExamplePage;

  beforeEach(() => {
    page = new AngularExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
