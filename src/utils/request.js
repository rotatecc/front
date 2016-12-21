import axios from 'axios'
import Promise from 'bluebird'

import config from '@/config'
import { getAccessTokenMixin } from '@/utils'


export default function request({ url, endpoint, method, params, data }) {
  const tokenMixin = getAccessTokenMixin()

  return axios({
    url: url || `${config.apiBaseUrl}${endpoint}`,
    method: method || 'get',
    headers: {
      ...tokenMixin,
    },
    params: params || {},
    data: data || {},
    responseType: 'json',
    onDownloadProgress(progressEvent) {
      if (progressEvent.lengthComputable) {
        const ratio = progressEvent.loaded / progressEvent.total
        const percentCompleted = Math.round(ratio * 100)
        console.log(`percent completed: ${percentCompleted}`) // eslint-disable-line no-console
        // TODO hook into request reducer actions
      }
    },
  })
  .then((response) =>
    // Resolve with the response data if this is from an endpoint
    Promise.resolve(endpoint ? response.data.data : response))
  .catch((error) => {
    if (!endpoint) {
      // If this isn't from one of our api endpoints, then
      // we don't know what the error structure is, so,
      // just forward the error as-is
      return Promise.reject(error)
    }

    // If this IS from one of our api endpoints, then
    // re-reject with the response error if it exists
    const message = error.response
      ? error.response.data.error.message
      : 'Unknown Error'

    // TODO
    // 'Unknown error' should be disambiguated
    // (ex. Network error, Internet disconnected, etc)

    return Promise.reject(new Error(message))
  })
}
