/**
 * Box
 *
 * A Tile with shadow and border-radius (if enabled)
 */

import { componentWithProps } from '../../utils'

import Tile from '../Tile'


export default componentWithProps(
  'Box',
  Tile,
  { hasShadow: true, hasRadius: true },
)
