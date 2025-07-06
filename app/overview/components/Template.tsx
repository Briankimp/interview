import React from 'react'
import Sidebar from './sidebar'
import Header from './Header'
import { Box } from '@mui/material'

const Overview = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <Sidebar />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Header />
       {children}
      </Box>
    </Box>
  )
}

export default Overview