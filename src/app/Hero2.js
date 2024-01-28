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
  Theme,
} from '@chakra-ui/react'
import React from 'react'

export default function Hero2() {
  return (
    <Box my={{ base: 26, lg: 36 }}>
      <Container maxWidth={'8xl'}>
        <SimpleGrid columns={{ base: 1, lg: 2 }}>
          {/* <Container> */}
          <Box order={{ base: 2, lg: '1' }} position={'relative'}>
            <Image
              src="/illustration-features-tab-1.svg"
              alt="Hamburgure"
              mx={'auto'}
            />
            <Box
              position={'absolute'}
              left={'-50%'}
              top={'40%'}
              w={'125%'}
              h={'84%'}
              bgColor={'p.softBlue'}
              zIndex={-1}
              borderRadius={'0 200px  200px 0'}
            />
          </Box>

          <Container
            order={{ base: 2, lg: '1' }}
            mt={{ base: '28', lg: '20' }}
            ml={{ base: '0', md: '20' }}
          >
            <Box textAlign={{ base: 'center', lg: 'left' }} mx={'auto'}>
              <Heading fontSize={{ base: '2xl', lg: '4xl' }}>
                Bookmark in one click
              </Heading>
              <Text
                color={'n.grayishBlue'}
                mt={'4'}
                fontSize={{ base: 'lg', lg: 'xl' }}
              >
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </Text>
              <Button
                mt={8}
                bgColor={'p.softBlue'}
                color={'white'}
                p={6}
                border={'2px solid transparent'}
                _hover={{
                  border: '2px solid blue',
                  bg: 'white',
                  color: 'blue',
                }}
                shadow={'md'}
              >
                More Info
              </Button>
            </Box>
          </Container>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
