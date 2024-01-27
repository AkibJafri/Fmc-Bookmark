import React, { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Card,
  StackDivider,
  Divider,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Link,
  Button,
} from '@chakra-ui/react'

const data = [
  {
    id: 1,
    title: 'Book in one Click',
    desc: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites',
    link: 'More Info',
    button: 'Simple Bookmarking',
  },
  {
    id: 2,
    title: 'Intelligent search',
    desc: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites',
    link: 'More Info',
    button: 'Simple Bookmarking',
  },
  {
    id: 3,
    title: 'Book in one Click',
    desc: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites',
    link: 'More Info',
    button: 'Simple Bookmarking',
  },
]

export default function Features() {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (index) => {
    setActiveTab(index)
  }

  return (
    <Box mt={'150px'} textAlign={'center'} mb={10}>
      <Container maxW={'xl'}>
        <Heading fontSize={{ base: '3xl', md: '5xl' }}>Features</Heading>
        <Text color={'gray'} mt={'8'} fontSize={{ base: 'md', lg: 'lg' }}>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </Text>
        <Box mt={8}>
          <Tabs
            variant="soft-rounded"
            colorScheme="teal"
            onChange={handleTabChange}
          >
            <TabList>
              {data.map((feature, index) => (
                <Tab key={index}>{feature.title}</Tab>
              ))}
            </TabList>
            <Divider mt={4} />
            <TabPanels>
              {data.map((feature, index) => (
                <TabPanel key={index}>
                  <Card>
                    <Heading fontSize="2xl">{feature.title}</Heading>
                    <Text color="gray" fontSize="lg" mt={4}>
                      {feature.desc}
                    </Text>
                    <Link href="#" color="teal" mt={4} display="block">
                      {feature.link}
                    </Link>
                    <Button colorScheme="teal" mt={4}>
                      {feature.button}
                    </Button>
                  </Card>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Box>
  )
}
