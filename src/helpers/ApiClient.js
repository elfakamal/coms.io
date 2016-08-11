
export const API_CALL = Symbol('API_CALL');

class ApiClient {
  constructor() {
    this.path = '/api/';
    // console.log('ApiClient :: constructor');
  }

  empty() {}
}


export default ApiClient;
