import axios from 'axios'
import { put } from 'redux-saga/effects'

import config from '@/config'
import { getAccessTokenMixin, generateUniqueId } from '@/utils'

import * as progressDuck from '@/ducks/progress'


export default function* request({ url, endpoint, method, params, data }) {
  const tokenMixin = getAccessTokenMixin()

  const progressId = generateUniqueId()
  yield put(progressDuck.init(progressId))

  try {
    const response = yield axios({
      url: url || `${config.apiBaseUrl}${endpoint}`,
      method: method || 'get',
      headers: {
        ...tokenMixin,
      },
      params: params || {},
      data: data || {},
      responseType: 'json',
      // onDownloadProgress(progressEvent) {
      //   if (progressEvent.lengthComputable) {
      //     const ratio = progressEvent.loaded / progressEvent.total
      //     const percentCompleted = Math.round(ratio * 100)
      //     console.log(`percent completed: ${percentCompleted}`) // eslint-disable-line no-console
      //   }
      // },
    })

    yield put(progressDuck.complete(progressId))

    // Resolve with the response data if this is from an endpoint
    return endpoint ? response.data.data : response
  } catch (error) {
    yield put(progressDuck.complete(progressId))

    if (!endpoint) {
      // If this isn't from one of our api endpoints, then
      // we don't know what the error structure is, so,
      // just forward the error as-is
      throw error
    }

    // If this IS from one of our api endpoints, then
    // re-reject with the response error if it exists
    const message = (error.response && error.response.data.error.message) || 'Unknown Error'

    // TODO
    // 'Unknown error' should be disambiguated
    // (ex. Network error, Internet disconnected, etc)

    throw new Error(message)
  }
}
