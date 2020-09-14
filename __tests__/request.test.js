const request = require('../lib/.gitKeep/request');

describe('request Function', () => {
  it('makes a request to the Books To Scrape page', async() => {
    const document = await request();

    expect(document.querySelector('.product_pod h3 a').textContent).toEqual('A Light in the ...');
  });
});
