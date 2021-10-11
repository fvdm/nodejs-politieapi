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
      invalid: 'test',
    });
  }
  catch (err) {
    error = err;
  }

  test()
    .isError ('fail', 'err', error)
    .isNotEmpty ('fail', 'err.message', err && err.message)
    .isNumber ('warn', 'err.code', err && err.code)
    .isString ('warn', 'err.type', err && err.type)
    .isArray ('warn', 'err.invalidFields', err.invalidFields)
    .isUndefined ('fail', 'data', data)
    .done()
  ;
});


dotest.run (500);
