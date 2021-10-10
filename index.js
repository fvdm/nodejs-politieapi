/**
 * Name:         politie-api
 * Description:  Access the Politie Open data API.
 * Author:       Franklin (https://fvdm.com)
 * Source:       https://github.com/fvdm/nodejs-politieapi
 * License:      Unlicense (public domain, see LICENSE file)
 */
 
 
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

};
