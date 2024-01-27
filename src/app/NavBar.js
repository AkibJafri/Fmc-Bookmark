import React from 'react'
import {
  Box,
  Flex,
  Text,
  Link,
  Container,
  Image,
  Button,
} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <Container maxWidth={'7xl'}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding="1rem"
        color="grey"
      >
        {/* Brand/logo */}
        <Image src="/logo-bookmark.svg" alt="logo" />

        {/* Navigation links */}
        <Box display={{ base: 'none', lg: 'block' }}>
          <Flex align="center">
            <Link mr={6} href="#">
              FEATURES
            </Link>
            <Link mr={6} href="#">
              PRICING
            </Link>
            <Link mr={6} href="#">
              CONTACT
            </Link>
            <Button colorScheme={'green'} px={'8'}>
              LOGIN
            </Button>
          </Flex>
        </Box>
        <Box display={{ base: 'block', lg: 'none' }} align="center">
          <Image src="/icon-hamburger.svg" alt="Hamburgure" />
        </Box>
      </Flex>
    </Container>
  )
}
export default NavBar
