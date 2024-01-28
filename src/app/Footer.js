import {
  Box,
  Text,
  Heading,
  Flex,
  Button,
  Center,
  Card,
  Container,
  Image,
  Input,
} from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <Box bgColor={'blue.500'}>
      <Container maxW={'lg'} py={'50'} mx={'auto'}>
        <Box textAlign={'center'} mt={20} textColor={'white'}>
          <Text mt={20} letterSpacing={8} fontSize={'xl'} fontWeight={'medium'}>
            35,000+ ALREADY JOINED
          </Text>
          <Heading
            fontSize={{ base: '2xl', md: '4xl' }}
            mt={10}
            fontWeight={'semibold'}
          >
            Stay up-to-date with what we’re doing
          </Heading>
        </Box>
        <Flex
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }} // Column on mobile, Row on laptop
          alignItems="center" // Center vertically
          justifyContent="center" // Center horizontally
          my={14}
          gap={'4'}
        >
          <Input
            type="email"
            placeholder="Enter your email address "
            required
            px={6}
            py={6}
            color="teal"
            _placeholder={{ color: 'inherit' }}
            bgColor={'white'}
          />
          <Button
            colorScheme={'red'}
            px={{ base: '40%', md: 6 }}
            py={6}
            border={'2px solid transparent'}
            _hover={{
              border: '2px solid red',
              bg: 'white',
              color: 'black',
            }}
            shadow={'md'}
          >
            Contact us
          </Button>
        </Flex>
      </Container>

      <Box bgColor={'black'} py={6} px={4} textAlign={'center'} mx={'auto'}>
        {/* Sections */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center', md: 'flex-start' }}
          justify={{ base: 'center', md: 'space-between' }}
          mt={{ base: 8, md: 0 }}
          maxW={{ base: '100%', md: '900px' }}
          mx="auto"
        >
          <Box justify="center" mt={7}>
            <Image src="logo-bookmark.svg" alt="Top Logo" />
          </Box>
          {/* Features Section */}
          <Box mt={{ base: 6, lg: 8 }}>
            <Heading
              fontSize={'lg'}
              color={'white'}
              mb={4}
              fontWeight={'300'}
              mr={{ lg: 4 }}
            >
              Features
            </Heading>
          </Box>

          {/* Resources Section */}
          <Box
            color={'lightslategray'}
            cursor={'pointer'}
            mt={{ base: 6, lg: 8 }}
          >
            <Heading
              fontSize={'lg'}
              color={'white'}
              mb={4}
              fontWeight={'300'}
              mr={{ lg: 4 }}
            >
              Pricing
            </Heading>
          </Box>

          {/* Company Section */}
          <Box mt={{ base: 6, lg: 8 }}>
            <Heading
              fontSize={'lg'}
              color={'white'}
              mb={4}
              fontWeight={'300'}
              mr={{ lg: 4 }}
            >
              Contact
            </Heading>
          </Box>

          {/* Social Media Links */}
          <Flex justify="center" mt={8}>
            <Box mx={2}>
              <Image src="/icon-facebook.svg" alt="Facebook" w={6} h={6} />
            </Box>

            <Box mx={2}>
              <Image src="/icon-twitter.svg" alt="Instagram" w={6} h={6} />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
