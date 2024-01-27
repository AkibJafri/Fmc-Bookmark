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
  },
  {
    logoSrc: '/logo-firefox.svg',
    heading: 'Add to Firefox',
    description: 'Minimum version 55',
  },
  {
    logoSrc: '/logo-opera.svg',
    heading: 'Add to Opera',
    description: 'Minimum version 42',
  },
]

export default function Cards() {
  return (
    <Container maxW={'8xl'} mt={'16'}>
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
      <Container maxW={'6xl'} py={'px'}>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          justifyContent={'center'}
          alignContent={'center'}
          mt={10}
          spacing={10}
        >
          {cardData.map((card, index) => (
            <Card
              key={index}
              boxShadow="lg"
              minW={{ base: 'xs', md: 'sm' }}
              py={4}
              position={'relative'}
              bottom={-10}
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

              <Image src="/bg-dots.svg" alt="" w={10} mb="2" />
              <Button colorScheme="blue" mx={10}>
                Get it on Chrome
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  )
}
