import { BicycleListingPage } from './app.po';

describe('bicycle-listing App', () => {
  let page: BicycleListingPage;

  beforeEach(() => {
    page = new BicycleListingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
