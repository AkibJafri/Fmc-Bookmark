import React, { useState } from 'react'
import {
  Box,
  Flex,
  Text,
  Link,
  Container,
  Image,
  Button,
  VStack,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const NavBar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  return (
    <Container maxWidth={'7xl'}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding="1rem"
        color="black"
      >
        {/* Brand/logo */}
        <Image src="/logo-bookmark.svg" alt="logo" />

        {/* Navigation links (Hidden on smaller screens) */}
        <Box display={{ base: 'none', lg: 'block' }}>
          <Flex align="center">
            <Link
              mr={7}
              href="#"
              style={{ textDecoration: 'none' }}
              _hover={{ color: 'red' }}
              fontWeight={'500'}
            >
              FEATURES
            </Link>
            <Link
              mr={7}
              href="#"
              style={{ textDecoration: 'none' }}
              _hover={{ color: 'red' }}
              fontWeight={'500'}
            >
              PRICING
            </Link>
            <Link
              mr={7}
              href="#"
              style={{ textDecoration: 'none' }}
              _hover={{ color: 'red' }}
              fontWeight={'500'}
            >
              CONTACT
            </Link>
            <Button
              colorScheme={'red'}
              px={'9'}
              border={'2px solid transparent'}
              _hover={{
                border: '2px solid red',
                bg: 'white',
                color: 'red',
              }}
              shadow={'md'}
            >
              LOGIN
            </Button>
          </Flex>
        </Box>

        {/* Hamburger Icon (Visible on smaller screens) */}
        <Box display={{ base: 'block', lg: 'none' }} align="center">
          <IconButton
            icon={<HamburgerIcon />}
            variant="outline"
            onClick={handleDrawerOpen}
          />
        </Box>

        {/* Drawer for mobile menu */}
        <Drawer
          isOpen={isDrawerOpen}
          onClose={handleDrawerClose}
          placement="right"
          size={'full'}
        >
          <DrawerOverlay>
            <DrawerContent
              bg="blue.900"
              color="white"
              opacity={'90%'}
              display={{ base: 'block', lg: 'none' }}
            >
              <DrawerCloseButton color="white" />
              <DrawerHeader filter="invert(1)">
                <Image src="/logo-bookmark.svg" alt="logo" />
              </DrawerHeader>
              <DrawerBody>
                <VStack
                  mt={10}
                  spacing={10}
                  align="center"
                  fontSize={'xl'}
                  fontWeight={'500'}
                >
                  {/* Your navigation links */}
                  <Link
                    onClick={handleDrawerClose}
                    color="white"
                    borderBottom={'.2px solid white'}
                    w={'full'}
                    textAlign={'center'}
                  >
                    FEATURES
                  </Link>
                  <Link
                    onClick={handleDrawerClose}
                    color="white"
                    borderBottom={'1px solid white'}
                    w={'full'}
                    textAlign={'center'}
                  >
                    PRICING
                  </Link>
                  <Link
                    onClick={handleDrawerClose}
                    color="white"
                    borderBottom={'1px solid white'}
                    w={'full'}
                    textAlign={'center'}
                  >
                    CONTACT
                  </Link>
                  <Button
                    px={'30vw'}
                    py={'7'}
                    border={'2px solid white'}
                    _hover={{
                      border: '2px solid blue',
                      bg: 'white',
                      color: 'black',
                    }}
                    shadow={'md'}
                    onClick={handleDrawerClose}
                    colorScheme={'transparent'}
                  >
                    LOGIN
                  </Button>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </Container>
  )
}

export default NavBar
