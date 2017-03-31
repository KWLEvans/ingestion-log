import { IngestionLogPage } from './app.po';

describe('ingestion-log App', function() {
  let page: IngestionLogPage;

  beforeEach(() => {
    page = new IngestionLogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
