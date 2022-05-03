import RequestError from '../../errors/request-error';

import { FAILED_TO_PROCESS_SERVER_RESPONSE_TITLE } from './constants';

class Request {
  private readonly apiKey;
  private readonly apiBasePath;

  constructor(apiKey: string, apiBasePath: string) {
    this.apiBasePath = apiBasePath;
    this.apiKey = apiKey;
  }

  async send(url: string, data?, method = 'GET') {
    const fullUrl = this.apiBasePath + url;
    let response;
    let responseData;

    try {
      response = await fetch(fullUrl, {
        method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.apiKey,
        },
      });

      responseData = await response.json();
    } catch (error) {
      throw new Error('Ошибка');
      // throw new RequestError(
      //     { status: response?.status, message: FAILED_TO_PROCESS_SERVER_RESPONSE_TITLE });
    }

    return responseData;
  }
}

const request = new Request(process.env.API_KEY, process.env.API_BASE_PATH);

export default request;
