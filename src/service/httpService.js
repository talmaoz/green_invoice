const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://sandbox.d.greeninvoice.co.il/api/v1'
  : 'https://sandbox.d.greeninvoice.co.il/api/v1';

import Axios from 'axios';

let axios = Axios.create({
  // withCredentials: true
  withCredentials: false,
  headers: {
    post: {'Content-Type': 'application/json'}
  }
});

async function ajax(endpoint, method, data = null) {
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw(err)
  }
}

export const httpService = {
  GET(endpoint, data) {
    return ajax(endpoint, 'GET', data);
  },
  POST(endpoint, data) {
    return ajax(endpoint, 'POST', data);
  },
  PUT(endpoint, data) {
    return ajax(endpoint, 'PUT', data);
  },
  DELETE(endpoint, data) {
    return ajax(endpoint, 'DELETE', data);
  }
};
