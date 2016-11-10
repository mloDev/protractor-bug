browser.ignoreSyncronization = true;

describe('bug report', function () {
  it('is buggy', function () {
    browser.get('http://protractortest.org').then(function () {
      console.log('loaded page');
    });
  });
});
