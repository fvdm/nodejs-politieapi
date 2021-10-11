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
   * @param   {number}  [timeout=5000]  Request time out in ms
   */

  constructor ({
    timeout = 5000,
  }) {
    this._config = {
      timeout,
    };
  }


  /**
   * Communicate with API
   *
   * @param   {string}  path          Request path
   * @param   {object}  [parameters]  Request arguments
   *
   * @return  {Promise<object>}
   */

  async _talk ({
    path,
    parameters = {},
  }) {
    const options = {
      url: 'https://api.politie.nl' + path,
      method: 'GET',
      timeout: this._config.timeout,
      parameters,
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'https://github.com/fvdm/nodejs-politieapi',
      },
    };

    const res = await doRequest (options);
    const data = JSON.parse (res.body);

    // API error
    if (res.statusCode === 400) {
      const error = new Error (data.message);

      error.code = data.code;
      error.type = data.type;
      error.invalidFields = data.invalidFields;

      throw error;
    }

    // Success
    return data;
  }


  async nieuws (parameters) {
    return this._talk ({
      path: '/v4/nieuws',
      parameters,
    });
  }
};
