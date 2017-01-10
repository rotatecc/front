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

export function saveAccessToken(token) {
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
