let productionUrl = 'https://pure-beach-42937.herokuapp.com';
let developmentUrl = 'http://localhost:3000';

let baseUrl = developmentUrl;
let loginApi = '/cosmosapi/sessions/';

const apiHelper = {
  getHeaderForDelete: (params, token) => {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      data: params
    };
  },
  getApiHeader: (token) => {
    return {
      headers: {
        Authorization: token
      }
    };
  },
  getLoginApi: () => {
    return baseUrl + loginApi
  }
};

export default apiHelper;
