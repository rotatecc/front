/**
 * Root saga
 */

import { watcherSaga as auth } from '@/ducks/auth'


export default function* saga() {
  yield [
    auth(),
  ]
}
