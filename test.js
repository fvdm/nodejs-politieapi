const dotest = require ('dotest');
const pkg = require ('./');

const timeout = process.env.POLITIE_TIMEOUT || '';
const app = new pkg ({ timeout });


dotest.add ('Interface', async test => {
  test()
    .isClass ('fail', 'exports', pkg)
    .isFunction ('fail', 'nieuws', app && app.nieuws)
    .done()
  ;
});


dotest.add ('nieuws', async test => {
  try {
    const data = await app.nieuws();

    test()
      .isObject ('fail', 'data', data)
      .isArray ('fail', 'data.nieuwsberichten', data && data.nieuwsberichten)
      .done()
    ;
  }
  catch (err) {
    test (err).done();
  }
});


dotest.run (500);
