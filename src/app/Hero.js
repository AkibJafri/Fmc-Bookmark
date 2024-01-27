import {
  Grid,
  Box,
  Image,
  Heading,
  SimpleGrid,
  Container,
  Text,
  ButtonGroup,
  Button,
} from '@chakra-ui/react'
import React from 'react'

export default function Hero() {
  return (
    <Box>
      <Container maxWidth={'8xl'}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} mt={10} maxW={'9xl'}>
          {/* <Container> */}
          <Box order={{ base: 1, lg: '2' }} position={'relative'}>
            <Image src="/illustration-hero.svg" alt="Hamburgure" mx={'auto'} />
            <Box
              position={'absolute'}
              right={'-20%'}
              top={'25%'}
              w={'100%'}
              h={'80%'}
              bgColor={'blue'}
              zIndex={-1}
              borderRadius={'200px 0 0 200px'}
            />
          </Box>

          <Container order={{ base: 2, lg: '1' }} mt={{ base: '8', md: '8' }}>
            <Box textAlign={{ base: 'center', lg: 'left' }}>
              <Heading mt={'8'} fontSize={{ base: '2xl', md: '5xl' }}>
                A Simple Bookmark Manager
              </Heading>
              <Text color={'gray'} mt={'8'} fontSize={{ base: 'md', lg: 'lg' }}>
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </Text>
              <ButtonGroup spacing="2" mt={'8'}>
                <Button colorScheme="blue" py={6}>
                  Get irt on Chrome
                </Button>
                <Button py={6}>Get it on Firefox</Button>
              </ButtonGroup>
            </Box>
            {/* </Container> */}
          </Container>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
