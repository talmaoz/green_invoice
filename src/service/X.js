import {httpService} from './httpService'

export function login (credentials) {
  // return httpService.POST('/account/login', credentials)
  credentials = JSON.stringify({
    'id': 'f34397cc-21a6-4ae9-98dc-a8268a80ec6a',
    'secret': 'Qktl7M2qGuthMDlD-OuXdg'
  })
  return httpService.POST('/account/token', credentials)

  // var request = new XMLHttpRequest();
  //
  // request.open('POST', 'https://sandbox.d.greeninvoice.co.il/api/v1/account/token');
  //
  // request.setRequestHeader('Content-Type', 'application/json');
  //
  // request.onreadystatechange = function () {
  //   if (this.readyState === 4) {
  //     console.log('Status:', this.status);
  //     console.log('Headers:', this.getAllResponseHeaders());
  //     console.log('Body:', this.responseText);
  //   }
  // };
  //
  // var body = {
  //   'id': 'f34397cc-21a6-4ae9-98dc-a8268a80ec6a',
  //   'secret': 'Qktl7M2qGuthMDlD-OuXdg'
  // };
  //
  // request.send(JSON.stringify(body));
  //

}


