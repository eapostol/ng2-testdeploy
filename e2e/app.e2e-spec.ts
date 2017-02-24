import { RaNg2TestdeployPage } from './app.po';

describe('ra-ng2-testdeploy App', function() {
  let page: RaNg2TestdeployPage;

  beforeEach(() => {
    page = new RaNg2TestdeployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
