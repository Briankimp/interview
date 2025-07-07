import React from 'react'
import Search from './search'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

const Header = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: { xs:'space-between', md: 'flex-end' },
      height: 72,
      gap: { xs: 2, md: 4 },
      pt: 1.75,
      pr: { xs: 2, md: 5 },
      pb: 2,
      boxShadow: '0px 1px 1px #E0E0E0',
      width: '100%',
      maxWidth: '100%',
      backgroundColor: 'white',
      position: 'sticky',
      top: 0,
      boxSizing: 'border-box',
     // zIndex: 1000,
     // m:-3,
    }}
  >
    <Search />
    <Image src="/bell.svg" alt="Bell" width={24} height={24} />
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0, pr: 2 }}>
      <Typography
      variant="h4"
      sx={{
        color: 'text.primary',
      }}
      >Username</Typography>
      <Image src="/username.svg" alt="Username" width={44} height={44} />
    </Box>
  </Box>
  )
}

export default Header