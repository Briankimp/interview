import { Box, Link, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Search from './search'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const MainSidebarItems = [
    {
      title: 'Overview',
      icon: <Image src="/overviewicon.svg" alt="Dashboard" width={24} height={24} />,
      link: '/overview',
      // arrow: <ArrowForward sx={{ width: 8, height: 9 }} />,
    },
    {
      title: 'Accounts',
      icon: <Image src="/overviewicon.svg" alt="Onboarding" width={24} height={24} />,
      link: '/onboarding',
     arrow:  <ArrowForwardIosIcon sx={{
        width: 8,
        height: 9
      }}/>
    },
    {
      title: 'Media Planning',
      icon: <Image src="/overviewicon.svg" alt="Overview" width={24} height={24} />,
      link: '/overview',
    },
    {
      title: 'Campaigns',
      icon: <Image src="/overviewicon.svg" alt="Overview" width={24} height={24} />,
      link: '/overview',
    },
    {
      title: 'Content Management',
      icon: <Image src="/overviewicon.svg" alt="Overview" width={24} height={24} />,
      link: '/overview',
    },
    {
      title: 'Reporting',
      icon: <Image src="/overviewicon.svg" alt="Overview" width={24} height={24} />,
      link: '/overview',
    },
    {
      title: 'Strategy Hub',
      icon: <Image src="/overviewicon.svg" alt="Overview" width={24} height={24} />,
      link: '/overview',
    },
    {
      title: 'Comments',
      icon: <Image src="/overviewicon.svg" alt="Overview" width={24} height={24} />,
      link: '/overview',
    }
  ]
  const OtherSidebarItems = 
    [
    {
      title: 'Notifications',
      icon: <Image src="/overviewicon.svg" alt="Overview" width={24} height={24} />,
      link: '/overview',
    },
    {
      title: 'Settings',
      icon: <Image src="/overviewicon.svg" alt="Overview" width={24} height={24} />,
      link: '/overview',
    },
    {
      title: 'Access Control',
      icon: <Image src="/overviewicon.svg" alt="Overview" width={24} height={24} />,
      link: '/overview',
    },
   
    {
      title: 'Support',
      icon: <Image src="/overviewicon.svg" alt="Overview" width={24} height={24} />,
      link: '/overview',
    },
  ]

  return (
    <Box
    // sx={{
    //   display: 'flex',
    //   flexDirection: 'row',

    // }}
    >
    <Box sx={{ 
      backgroundColor: 'dashboard.main',
      display: 'flex', 
      flexDirection: 'column',

      alignItems: 'center', 
      width: isCollapsed ? 64 : 249,
      height: '100vh', 
      py: 3,
      gap: 3,
      transition: 'width 0.3s ease-in-out',

      }}>
            <Box sx={{               
              width: '100%',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              paddingLeft:2.5,
              paddingRight:2.5,
              boxSizing: 'border-box'
              }}>
                <Image  
                  src="/logowhite.svg" 
                  alt="Logo" 
                  width={160} 
                  height={22} 
                  style={{ display: isCollapsed ? 'none' : 'block' }}
                />
                <ArrowForwardIosIcon
                   onClick={toggleSidebar}
                   sx={{
                     width: 10,
                     height: 11,
                     cursor: 'pointer',
                     transition: 'transform 0.3s',
                     transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
                     color: 'dashIcons.main',
                   }}
                />
            </Box>


            <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 8,
            }}>
<Box
sx={{
  display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 2,
}}>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'dashboardText.primary',
                    display: !isCollapsed ? 'block' : 'none'
                  }}>
                  Main
                </Typography>

                {MainSidebarItems.map((item) => (
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'flex-start',
                      width: isCollapsed ? 64 : 229,
                      height: 38 ,
                      borderRadius: 1.5,
                      gap: 3,
                      py: 1.25,
                      px: 0.875,
                      '&:hover': {
                        backgroundColor: 'hover.main',
                      },
                      boxSizing: 'border-box'
                      }}>
                  <Link key={item.title} href={item.link}>

                  <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'flex-start',
                      width: 229,
                      height: 38,
                      borderRadius: 1.5,
                      gap: 1,
                      py: 1.25,
                      px: 0.875,
                      }}>

                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}>
                        {item.icon}
                        <Typography
                          variant="h5"
                          sx={{
                            color: 'dashboardText.primary',
                            display: !isCollapsed ? 'block' : 'none'
                          }}>
                            {item.title}
                        </Typography>
                      </Box >
                      </Box>
                  </Link>
                  </Box>
                ))}
</Box>
<Box
sx={{
  display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 2,
}}>
              
                <Typography
                  variant="h6"
                  sx={{
                    color: 'dashboardText.primary',
                    display: !isCollapsed ? 'block' : 'none'
                  }}>
                  Other
                </Typography>
                
                {OtherSidebarItems.map((item) => (
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'flex-start',
                    width: isCollapsed ? 64 : 229,
                    height: 38 ,
                    borderRadius: 1.5,
                    gap: 3,
                    py: 1.25,
                    px: 0.875,
                    '&:hover': {
                      backgroundColor: 'hover.main',
                    },
                    boxSizing: 'border-box'
                    }}>

                  <Link key={item.title} href={item.link}>

                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'flex-start',
                      width: 229,
                      height: 38,
                      borderRadius: 1.5,
                      gap: 1,
                      py: 1.25,
                      px: 0.875,
                      }}>

                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}>
                        {item.icon}
                        <Typography
                          variant="h5"
                          sx={{
                            color: 'dashboardText.primary',
                            display: !isCollapsed ? 'block' : 'none'
                          }}>
                            {item.title}
                        </Typography>
                      </Box >
                      </Box>
                    </Link>
                  </Box>
                ))}
                </Box>
            </Stack>
    </Box>
    </Box>

  )
}

export default Sidebar