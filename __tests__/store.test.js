const fs = require('fs');
const pool = require('../lib/utils/pool');
const store = require('../lib/store');

describe('store function', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('takes an array of books and saves them in a db', async() => {
    const books = [
      { title: 'book1', coverImg: 'random asdf', rating: 'Three', price: '$54', inStock: true },
      { title: 'book2', coverImg: 'random strifffng', rating: 'Five', price: '$5', inStock: true },
      { title: 'book3', coverImg: 'random', rating: 'Five', price: '$50', inStock: true },
      { title: 'book4', coverImg: ' string', rating: 'Two', price: '$66', inStock: true },
    ];

    await store(books);

    const { rows } = await pool.query('SELECT * FROM books');

    expect(rows.length).toEqual(4);
  });

});

