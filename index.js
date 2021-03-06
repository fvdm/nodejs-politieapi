/**
 * Name:         politie-api
 * Description:  Access the Politie Open data API.
 * Author:       Franklin (https://fvdm.com)
 * Source:       https://github.com/fvdm/nodejs-politieapi
 * License:      Unlicense (public domain, see LICENSE file)
 */

const { doRequest } = require ('httpreq');

module.exports = class PolitieAPI {

  /**
   * @param   {number}  [timeout=10000]  Request time out in ms
   */

  constructor ({
    timeout = 10000,
  } = {}) {
    this._config = {
      timeout,
    };
  }


  /**
   * Communicate with API
   *
   * @param   {string}  path              Request path
   * @param   {string}  key               Response key to return
   * @param   {mixed}   empty             Default response if empty
   * @param   {object}  [parameters]      Method parameters
   * @param   {string}  [parameters.uid]  Request one item object
   *
   * @return  {Promise<array|object>}
   */

  async _talk ({
    path,
    parameters = {},
    key,
    empty,
  }) {
    const options = {
      url: 'https://api.politie.nl' + path,
      method: 'GET',
      timeout: this._config.timeout,
      parameters,
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'nodejs-politieapi',
      },
    };

    const res = await doRequest (options);

    // Success, but empty
    if (res.statusCode === 204) {
      return parameters.uid ? {} : empty;
    }

    // API error in HTML
    const htmlError = res.body.match (/<title>([^<]+) \| [^<]+<\/title>/);

    if (res.statusCode === 400 && htmlError) {
      const error = new Error (htmlError[1]);

      error.code = -1;
      error.type = '';
      error.invalidFields = [];

      throw error;
    }

    // Parse response
    const data = JSON.parse (res.body);

    /*
    // API error in JSON
    if (res.statusCode === 400) {
      const error = new Error (data.message);

      error.code = data.code;
      error.type = data.type;
      error.invalidFields = data.invalidFields;

      throw error;
    }
    */

    // Success, return requested object
    if (parameters.uid) {
      return data[key][0];
    }

    // Success, return data;
    return data[key];
  }


  /**
   * Get list of news messages
   *
   * @param   {object}  [parameters]      Method parameters
   * @param   {string}  [parameters.uid]  Request one item object
   *
   * @return  {Promise<array|object>}
   */

  async nieuws (parameters) {
    return this._talk ({
      path: '/v4/nieuws',
      parameters,
      key: 'nieuwsberichten',
      empty: [],
    });
  }


  /**
   * Get list of either all or local police stations
   * Exclude `lat` and `lon` to list all stations.
   *
   * @param   {object}  parameters  Method parameters
   *
   * @return  {Promise<array>}
   */

  async politiebureaus ({
    lat = null,
    lon = null,
  } = {}) {
    let path = '/v4/politiebureaus';

    if (lat + lon === 0) {
      path += '/all';
    }

    return this._talk ({
      path,
      parameters: arguments[0],
      key: 'politiebureaus',
      empty: [],
    });
  }


  /**
   * Get list of neighbourhood agents
   *
   * @param   {object}  parameters  Method parameters
   *
   * @return  {Promise<array>}
   */

  async wijkagenten (parameters) {
    return this._talk ({
      path: '/v4/wijkagenten',
      parameters,
      key: 'wijkagenten',
      empty: [],
    })
      .then (data => data.map (itm => {
        itm.twitter.accountnaam = itm.twitter.accountnaam.replace (/[^\w]/g, '');
        return itm;
      }))
    ;
  }


  /**
   * Get list of missing persons
   *
   * @param   {object}  [parameters]      Method parameters
   * @param   {string}  [parameters.uid]  Request one item object
   *
   * @return  {Promise<array|object>}
   */

  async vermist (parameters) {
    return this._talk ({
      path: '/v4/vermist',
      parameters,
      key: 'vermisten',
      empty: [],
    });
  }


  /**
   * Get the urgent news message
   *
   * @param   {object}  [parameters]  Method parameters
   *
   * @return  {Promise<object>}
   */

  async urgentpolitiebericht (parameters = {}) {
    return this._talk ({
      path: '/v4/urgentpolitiebericht',
      parameters,
      key: 'opsporingsberichten',
      empty: [{}],
    })
      .then (data => data[0])
    ;
  }

};
