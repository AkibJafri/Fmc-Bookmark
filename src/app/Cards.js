// 'use client'
'use client'
import {
  SimpleGrid,
  Card,
  Box,
  Image,
  Heading,
  Text,
  Container,
  Button,
} from '@chakra-ui/react'
import React, { useState } from 'react'

const cardData = [
  {
    logoSrc: '/logo-chrome.svg',
    heading: 'Add to Chrome',
    description: 'Minimum version 62',
    btn: 'Add & Install Extension  ',
  },
  {
    logoSrc: '/logo-firefox.svg',
    heading: 'Add to Firefox',
    description: 'Minimum version 55',
    btn: 'Add & Install Extension',
  },
  {
    logoSrc: '/logo-opera.svg',
    heading: 'Add to Opera',
    description: 'Minimum version 42',
    btn: 'Add & Install Extension',
  },
]

export default function Cards() {
  return (
    <Container maxW={'7xl'} mt={{ base: 24, lg: 30 }}>
      <Box>
        <Container textAlign={'center'} maxW={'2xl'}>
          <Heading mt={'4'} fontSize={{ base: '2xl', md: '5xl' }}>
            Download the extension
          </Heading>
          <Text color={'gray'} mt={'8'} fontSize={{ base: 'md', lg: 'lg' }}>
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </Text>
        </Container>
      </Box>
      <Container maxW={'5xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          alignItems={'center'}
          justifyItems={'center'}
          mt={10}
          gap={{ base: 20, lg: 8 }}
          bot
        >
          {cardData.map((card, index) => (
            <Card
              key={index}
              boxShadow="xl"
              maxW={{ base: 'xs', lg: 'xs' }}
              py={4}
              mb={index === 1 ? -20 : index === 2 ? -32 : 0}
            >
              <Image src={card.logoSrc} alt="" w={'28'} mb={8} mx={'auto'} />
              <Box textAlign={'center'} py={10}>
                <Heading fontSize={{ base: '2xl', lg: '3xl' }}>
                  {card.heading}
                </Heading>
                <Text color={'gray'} fontSize={{ base: 'md', lg: 'lg' }}>
                  {card.description}
                </Text>
              </Box>
              <Image src="/bg-dots.svg" alt="" mb={6} />

              <Button colorScheme="blue" mx={10}>
                {card.btn}
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  )
}
