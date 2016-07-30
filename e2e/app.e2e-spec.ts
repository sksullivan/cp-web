import { CpWebPage } from './app.po';

describe('cp-web App', function() {
  let page: CpWebPage;

  beforeEach(() => {
    page = new CpWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
