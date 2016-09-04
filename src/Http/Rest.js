/**
 * @class Kryptonik.Http.Rest
 */

import {
  Alert,
} from 'react-native';

import Config from '../../../../config'; // eslint-disable-line import/no-unresolved

class Api {

  constructor() {
    const port = Config.port.length > 0 ? `:${Config.port}` : '';
    const apiEndpoint = Config.apiEndpoint ? Config.apiEndpoint : '';
    this.rootUrl = `${Config.protocol}://${Config.host}${port}${apiEndpoint}`;
  }

  /**
   * @param {Object} params
   * @param {String} params.url
   * @param {Object} [params.headers={}]
   * @param {String} [params.method='GET']
   * @param {String} [params.timeout=3000]
   */
  load({ url = null, body = {}, headers = {}, method = 'GET', timeout = 3000 }) {
    return new Promise((resolve, reject) => {
      const request = {};
      const headerObj = headers;

      if (url === null) {
        reject('Krptonik/Http/Rest#load - Parameter [url] is missing');
        return;
      }

      const fullUrl = this.rootUrl + url;

      headerObj.Accept = 'application/json';
      headerObj['Content-Type'] = 'application/json';

      request.method = method;
      request.headers = headerObj;

      if (method !== 'GET' && method !== 'HEAD') {
        if (Object.keys(body).length > 0) {
          request.body = JSON.stringify(body);
        }
      }

      // PART 2: https://github.com/github/fetch/issues/175#issuecomment-125779262
      this.timeout(timeout, fetch(fullUrl, request)).then((response) => response.json())
        .then((responseData) => {
          if (typeof responseData.success !== 'undefined' && responseData.success === false) {
            this.showError(responseData);
            reject(responseData);
            return;
          }
          resolve(responseData);
        }, (err) => {
          reject(err);
        });
    });
  }

  showError(err) {
    if (Config.env !== 'PROD') {
      const title = ['API Error #', err.code].join('');
      Alert.alert(title, err.message);
    }
  }

  // PART 1: https://github.com/github/fetch/issues/175#issuecomment-125779262
  timeout(ms, promise) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({
          success: false,
          code: 1,
          message: 'Request timed out',
        });
      }, ms);
      promise.then(resolve, reject);
    });
  }

}

export default Api;
