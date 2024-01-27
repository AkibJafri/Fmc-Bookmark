import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Divider,
} from '@chakra-ui/react'
import React from 'react'

const tabsData = [
  {
    label: 'Simple Bookmarking',
    content: 'Content for Simple Bookmarking',
    styles: {
      fontWeight: '500',
      fontSize: { base: 'md', lg: 'xl' },
      color: 'grey',
      _selected: { color: 'black' },
    },
  },
  {
    label: 'Speedy Searching',
    content: 'Content for Speedy Searching',
    styles: {
      fontWeight: '500',
      fontSize: { base: 'md', lg: 'xl' },
      color: 'grey',
      _selected: { color: 'black' },
    },
  },
  {
    label: 'Easy Sharing',
    content: 'Content for Easy Sharing',
    styles: {
      fontWeight: '500',
      fontSize: { base: 'md', lg: 'xl' },
      color: 'grey',
      _selected: { color: 'black' },
    },
  },
]

export default function YourComponent() {
  return (
    <Container maxW={'4xl'} mt={28}>
      <Tabs variant="enclosed">
        <TabList
          spacing={4}
          justifyContent={{ base: 'center', md: 'space-between' }}
          alignItems="center"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          {tabsData.map((tab, index) => (
            <React.Fragment key={index}>
              <Tab {...tab.styles}>{tab.label}</Tab>
              {index < tabsData.length - 1 && (
                <Divider orientation="vertical" />
              )}
            </React.Fragment>
          ))}
        </TabList>
      </Tabs>
    </Container>
  )
}
