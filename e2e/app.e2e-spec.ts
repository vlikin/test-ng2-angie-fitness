import { TestNg2AngieFitnessPage } from './app.po';

describe('test-ng2-angie-fitness App', () => {
  let page: TestNg2AngieFitnessPage;

  beforeEach(() => {
    page = new TestNg2AngieFitnessPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
