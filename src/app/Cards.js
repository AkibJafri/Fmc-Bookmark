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
          <Heading mt={'4'} fontSize={{ base: '2xl', md: '4xl' }}>
            Download the extension
          </Heading>
          <Text color={'gray'} mt={'6'} fontSize={{ base: 'md', lg: 'xl' }}>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </Text>
        </Container>
      </Box>
      <Container maxW={'5xl'} my={100}>
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          alignItems={'center'}
          justifyItems={'center'}
          mt={10}
          spacing={{ base: 6, lg: 2 }}
        >
          {cardData.map((card, index) => (
            <Card
              key={index}
              boxShadow="lg"
              maxW={{ base: 'xs', lg: 'xs' }}
              py={6}
              mb={{ lg: index === 1 ? -20 : index === 2 ? -32 : 0 }}
            >
              <Image src={card.logoSrc} alt="" w={'28'} mb={8} mx={'auto'} />
              <Box textAlign={'center'} py={10}>
                <Heading fontSize={{ base: '2xl', lg: '2xl' }}>
                  {card.heading}
                </Heading>
                <Text color={'gray'} fontSize={{ base: 'md', lg: 'lg' }} mt={4}>
                  {card.description}
                </Text>
              </Box>
              <Image src="/bg-dots.svg" alt="" mb={6} />

              <Button
                py={6}
                px={8}
                colorScheme="blue"
                mx={'auto'}
                border={'2px solid transparent'}
                _hover={{
                  border: '2px solid blue',
                  bg: 'white',
                  color: 'blue',
                }}
                shadow={'md'}
              >
                {card.btn}
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  )
}
