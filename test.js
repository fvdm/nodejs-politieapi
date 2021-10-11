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
    const data = await app.nieuws ({
      fromdate: '20211001',
      todate: '20211011',
    });

    test()
      .isArray ('fail', 'data', data)
      .isNotEmpty ('fail', 'data', data)
      .done()
    ;
  }
  catch (err) {
    test (err).done();
  }
});


dotest.add ('Empty response', async test => {
  try {
    const data = await app.nieuws ({
      offset: 1000000,
    });

    test()
      .isArray ('fail', 'data', data)
      .isEmpty ('fail', 'data', data)
      .done()
    ;
  }
  catch (err) {
    test (err).done();
  }
});


dotest.add ('Request timeout', async test => {
  let error;
  let data;

  try {
    const tmp = new pkg ({
      timeout: 1,
    });

    data = await tmp.nieuws();
  }
  catch (err) {
    error = err;
  }

  test()
    .isUndefined ('fail', 'data', data)
    .isError ('fail', 'error', error)
    .isExactly ('fail', 'error.code', error && error.code, 'TIMEOUT')
    .done()
  ;
});


dotest.add ('API error - JSON', async test => {
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
    .isNot ('fail', 'error.type', typeof error.type, 'undefined')
    .isArray ('fail', 'error.invalidFields', error.invalidFields)
    .isNotEmpty ('fail', 'error.invalidFields', error.invalidFields)
    .done()
  ;
});


dotest.add ('API error - HTML', async test => {
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
    .isNot ('warn', 'error.code', typeof error.code, 'undefined')
    .isNot ('warn', 'error.type', typeof error.type, 'undefined')
    .isArray ('warn', 'error.invalidFields', error.invalidFields)
    .isNotEmpty ('warn', 'error.invalidFields', error.invalidFields)
    .done()
  ;
});


dotest.run (500);
