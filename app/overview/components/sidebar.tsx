import { Box, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Search from './search'

const Sidebar = () => {
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
     arrow:  <ArrowForward sx={{
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
      width: 249,
      height: '100vh', 
      py: 3,
      gap: 3,

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
                 <Image src="/logowhite.svg" alt="Logo" width={160} height={22} />
                 <Image src="/arrows.svg" alt="Arrow" width={8} height={9} />
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
                sx={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'dashboardText.primary',
                  letterSpacing: 1
                }}>
                  Main
                </Typography>

                {MainSidebarItems.map((item) => (
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'flex-start',
                    width: 229,
                    height: 38,
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
                          gap: 2.25
                        }}>
                      {item.icon}
                      <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: 'dashboardText.primary',
                        letterSpacing: 0.1,
                        textTransform: 'none'
                      }}>
                        {item.title}
                      </Typography>
                      </Box>
                      {item?.arrow && (
                        <Box> 
                          {item.arrow}
                        </Box>
                      )}
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
                sx={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'dashboardText.primary',
                  letterSpacing: 1
                }}>Other</Typography>
                
                {OtherSidebarItems.map((item) => (
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'flex-start',
                    width: 229,
                    height: 38,
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
                        <Typography sx={{
                          fontSize: 14,
                          fontWeight: 400,
                           color: 'dashboardText.primary', 
                           letterSpacing: 0.1
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
    {/* <Box sx={{ 
        // // position: 'fixed', 
        // top: 0,
        // // left: 249,
        //  right: 0,   
        display: 'flex', 
        alignItems: 'center',
        //  //width: '100%', 
        //  flexDirection: 'row',
        //  justifyContent: 'flex-end',
        //  height: 72,
        //  gap: 4,
        //  px: 2.5,
        //  pt: 1.75,
        //  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
         }}>
      <Search/>
      <Image src="/bell.svg" alt="Bell" width={24} height={24} />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography>Username</Typography>
        <Image src="/username.svg" alt="Username" width={24} height={24} />
      </Box>
    </Box> */}
    </Box>

  )
}

export default Sidebar