const request = require('../lib/request');

describe('request Function', () => {
  it('makes a request to the Books To Scrape page', async() => {
    const document = await request(1);

    expect(document.querySelector('.product_pod h3 a').textContent).toEqual('A Light in the ...');
  });
});
