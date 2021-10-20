const dotest = require ('dotest');
const pkg = require ('./');

const timeout = process.env.POLITIE_TIMEOUT || void 0;
const app = new pkg ({ timeout });

const cache = {};


dotest.add ('Interface', async test => {
  test()
    .isClass ('fail', 'exports', pkg)
    .isFunction ('fail', 'nieuws', app && app.nieuws)
    .isFunction ('fail', 'politiebureaus', app && app.politiebureaus)
    .isFunction ('fail', 'wijkagenten', app && app.wijkagenten)
    .isFunction ('fail', 'urgentpolitiebericht', app && app.urgentpolitiebericht)
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


dotest.add ('politiebureaus', async test => {
  try {
    const data = await app.politiebureaus ({
      lat: 52.373089,
      lon: 4.8910403,
      radius: 5,
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


dotest.add ('politiebureaus - all', async test => {
  try {
    const data = await app.politiebureaus();

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


dotest.add ('wijkagenten', async test => {
  try {
    const data = await app.wijkagenten ({
      lat: 52.373089,
      lon: 4.8910403,
      radius: 5,
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


dotest.add ('vermist', async test => {
  try {
    const data = await app.vermist();

    cache.vermistUid = data[0].uid:

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


dotest.add ('vermist - uid', async test => {
  try {
    const data = await app.vermist ({
      uid: cache.vermistUid,
    });

    test()
      .isObject ('fail', 'data', data)
      .isNotEmpty ('fail', 'data', data)
      .isExactly ('fail', 'data.uid', data.uid, cache.vermistUid)
      .done()
    ;
  }
  catch (err) {
    test (err).done();
  }
});


dotest.add ('urgentpolitiebericht', async test => {
  try {
    const data = await app.urgentpolitiebericht();

    test()
      .isObject ('fail', 'data', data)
      .isNotEmpty ('warn', 'data', data)
      .done()
    ;
  }
  catch (err) {
    test (err).done();
  }
});


dotest.add ('urgentpolitiebericht - language', async test => {
  try {
    const data = await app.urgentpolitiebericht ({
      language: 'uk',
    });

    test()
      .isObject ('fail', 'data', data)
      .isNotEmpty ('warn', 'data', data)
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


/*
dotest.add ('API error - JSON', async test => {
  let error;
  let data;

  try {
    const tmp = new pkg();

    data = await tmp.nieuws ({
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
    .isNumber ('warn', 'error.code', error && error.code)
    .isCondition ('fail', 'error.code >= 0', error && error.code, '>=', 0)
    .isString ('warn', 'error.type', error && error.type)
    .isArray ('fail', 'error.invalidFields', error && error.invalidFields)
    .isNotEmpty ('fail', 'error.invalidFields', error && error.invalidFields)
    .done()
  ;
});
*/


dotest.add ('API error - HTML', async test => {
  let error;
  let data;

  try {
    const tmp = new pkg();

    data = await tmp.nieuws ({
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
    .isNumber ('warn', 'error.code', error && error.code)
    .isExactly ('fail', 'error.code', error && error.code, -1)
    .isString ('warn', 'error.type', error && error.type)
    .isArray ('warn', 'error.invalidFields', error && error.invalidFields)
    .isNotEmpty ('warn', 'error.invalidFields', error && error.invalidFields)
    .done()
  ;
});


dotest.run (500);
