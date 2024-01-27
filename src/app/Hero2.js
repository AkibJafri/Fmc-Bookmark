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

export default function Hero2() {
  return (
    <Box mt="8">
      <Container maxWidth={'8xl'}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} mt={10} maxW={'9xl'}>
          {/* <Container> */}
          <Box order={{ base: 2, lg: '1' }} position={'relative'}>
            <Image
              src="/illustration-features-tab-1.svg"
              alt="Hamburgure"
              mx={'auto'}
            />
            <Box
              position={'absolute'}
              left={'-20%'}
              top={'25%'}
              w={'100%'}
              h={'80%'}
              bgColor={'blue'}
              zIndex={-1}
              borderRadius={'0 200px  200px 0'}
            />
          </Box>

          <Container order={{ base: 2, lg: '1' }} mt={{ base: '8', md: '8' }}>
            <Box textAlign={{ base: 'center', lg: 'left' }}>
              <Heading mt={'8'} fontSize={{ base: 'xl', md: '4xl' }}>
                Bookmark in one click
              </Heading>
              <Text color={'gray'} mt={'8'} fontSize={{ base: 'md', lg: 'lg' }}>
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </Text>
              {/* // <ButtonGroup spacing="2" mt={'8'}>
              //   <Button colorScheme="blue" py={6}>
              //     Get irt on Chrome
              //   </Button>
              //   <Button py={6}>Get it on Firefox</Button>
              // </ButtonGroup> */}
            </Box>
          </Container>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
