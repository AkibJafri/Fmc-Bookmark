import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
} from '@chakra-ui/react'

export default function Faq() {
  return (
    <Box my={'200'}>
      <Container maxW={'xl'} textAlign={'center'} mb={10}>
        <Heading fontSize={{ base: '3xl', lg: '4xl' }}>
          Frequently Asked Questions
        </Heading>
        <Text color={'gray'} mt={'2'} fontSize={{ base: 'md', lg: 'lg' }}>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </Text>
      </Container>
      <Container maxW={'2xl'} fontSize={'xl'}>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={'xl'}
                  fontWeight={'500'}
                >
                  What is Bookmark?
                </Box>
                <AccordionIcon color={'blue'} _hover={{ color: 'red' }} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={'xl'}
                  fontWeight={'500'}
                >
                  How can I request a new browser?
                </Box>
                <AccordionIcon color={'blue'} _hover={{ color: 'red' }} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={'xl'}
                  fontWeight={'500'}
                >
                  Is there a mobile app?
                </Box>
                <AccordionIcon color={'blue'} _hover={{ color: 'red' }} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left "
                  fontSize={'xl'}
                  fontWeight={'500'}
                >
                  What about other Chromium browsers?
                </Box>
                <AccordionIcon color={'blue'} _hover={{ color: 'red' }} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
      <Flex
        alignItems="center" // Center vertically
        justifyContent="center" // Center horizontally
        mt={14}
      >
        <Button
          bgColor={'p.softBlue'}
          color={'white'}
          p={6}
          mx={10}
          border={'2px solid transparent'}
          _hover={{
            border: '2px solid blue',
            bg: 'white',
            color: 'black',
          }}
          shadow={'md'}
        >
          More Info
        </Button>
      </Flex>
    </Box>
  )
}
