import { JsPage } from './app.po';

describe('js App', function() {
  let page: JsPage;

  beforeEach(() => {
    page = new JsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
