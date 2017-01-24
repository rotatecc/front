import Cookies from 'js-cookie'
import shortid from 'shortid'


/**
 * Re-exports
 */

export { default as request } from './request'
export { default as formSaga } from './formSaga'


/**
 * Utils
 */


// Access Token / Login management

export function removeAccessToken() {
  Cookies.remove('jwt')
}

export function saveAccessToken(token) {
  // HACK TODO
  // not secure, cookie should be set by server
  // and sent automatically with requests
  Cookies.set('jwt', token)
}


export function getAccessToken() {
  const token = Cookies.get('jwt')
  return (!token || typeof token !== 'string' || !token.length) ? null : token
}


export function getAccessTokenMixin() {
  const token = getAccessToken()
  return token ? ({ 'x-access-token': token }) : ({})
}


// Misc

export function generateUniqueId() {
  return shortid.generate()
}

/**
 * Conditionally require a React PropType based on a condition
 */
export function requiredIf(type, condition) {
  return function pred(props) {
    const test = condition(props) ? type.isRequired : type
    return test.apply(this, arguments) // eslint-disable-line prefer-rest-params
  }
}
