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
      justifyContent: 'flex-end',
      height: 72,
      gap: 4,
      pt: 1.75,
      pr: 4,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      width: '100%',
      backgroundColor: 'white',
      minWidth: 0,
    }}
  >
    <Search />
    <Image src="/bell.svg" alt="Bell" width={24} height={24} />
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0, pr: 2 }}>
      <Typography>Username</Typography>
      <Image src="/username.svg" alt="Username" width={44} height={44} />
    </Box>
  </Box>
  )
}

export default Header