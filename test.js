const dotest = require ('dotest');
const pkg = require ('./');

const timeout = process.env.POLITIE_TIMEOUT || '';
const app = new pkg ({ timeout });


dotest.add ('Interface', async test => {
  test()
    .isClass ('fail', 'exports', pkg)
    .done()
  ;
});


dotest.run (500);
