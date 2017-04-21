import React from 'react'

import { Hero, HeroTitle, HeroSubtitle } from '@/bearings'


function NotFound() {
  return (
    <Hero bold>
      <HeroTitle>Page Not Found</HeroTitle>
      <HeroSubtitle>Try a search?</HeroSubtitle>
    </Hero>
  )
}

export default NotFound
