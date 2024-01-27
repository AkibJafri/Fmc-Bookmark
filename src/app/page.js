'use client'
import { Box } from '@chakra-ui/react'
import NavBar from './NavBar'
import Hero from './Hero'
import Feartures from './Feartures'
import Hero2 from './Hero2'
import Cards from './Cards'
import Faq from './Faq'

export default function page() {
  return (
    <Box overflowX={'hidden'}>
      <NavBar />
      <Hero />
      {/* <Feartures /> */}
      <Hero2 />
      <Cards />
      <Faq />
    </Box>
  )
}
