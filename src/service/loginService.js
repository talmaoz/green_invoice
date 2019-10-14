import {httpService} from './httpService'

export function login (credentials) {
  return httpService.POST('/account/login', credentials)
}

export function getValidationObj(inputType) {

  const validationOptions = {
    'email' : {
      regExp: /\S+@\S+\.\S+/,
      error: 'כתובת המייל אינה תקינה'
    },
    'password' : {
      regExp: /\S{8,16}/,
      error: 'יש להזין 8-16 תווים'
    }
  }

  return validationOptions[inputType]

}
