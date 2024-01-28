// theme.js

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    // primary
    p: {
      softBlue: 'hsl(231, 69%, 60%)',
      softRed: 'hsl(0, 94%, 66%)',
    },
    // neutral
    n: {
      grayishBlue: 'hsl(229, 8%, 60%)',
      veryDarkBlue: 'hsl(229, 31%, 21%)',
    },
  },
})

export default theme
