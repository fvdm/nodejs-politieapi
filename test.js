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


dotest.add ('API error', async test => {
  let error;
  let data;

  try {
    data = await app.nieuws ({
      fromdate: '98765432',
    });
  }
  catch (err) {
    error = err;
  }

  test()
    .isUndefined ('fail', 'data', data)
    .isError ('fail', 'error', error)
    .isNotEmpty ('fail', 'error.message', error && error.message)
    .isNot ('fail', 'error.code', typeof error.code, 'undefined')
    .isString ('fail', 'error.type', typeof error.type, 'undefined')
    .isArray ('fail', 'error.invalidFields', error.invalidFields)
    .done()
  ;
});


dotest.run (500);
