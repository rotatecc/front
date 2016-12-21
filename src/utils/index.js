import Cookies from 'js-cookie'


// Re-exports

export { default as request } from './request'

// Utils


export function saveAccessToken(token) {
  Cookies.set('jwt', token)
}


export function getAccessTokenMixin() {
  const token = Cookies.get('jwt')

  return (!token || typeof token !== 'string' || !token.length) ? {} : {
    'x-access-token': token,
  }
}
