import {httpService} from './httpService'

export async function loginPost (credentials) {
  const bla = await httpService.POST('/account/login', credentials)
  console.log('bla=',bla)
  return bla
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
