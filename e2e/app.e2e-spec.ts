import { NgDIPage } from './app.po';

describe('ng-di App', () => {
  let page: NgDIPage;

  beforeEach(() => {
    page = new NgDIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
