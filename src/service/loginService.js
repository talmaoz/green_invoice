import {httpService} from './httpService'

export function login (credentials) {
  return httpService.POST('/account/login', credentials)
}

export function validateInput(inputType, InputValue) {

}
