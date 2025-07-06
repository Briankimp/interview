"use client";
import React from 'react'
import Template from './components/Template'
import { Box, Button, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import Image from 'next/image'
import LinearWithValueLabel from './components/LinearProgress';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Link from 'next/link';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

const page = () => {
  const [project, setProject] = React.useState("");
  const Projects = [
    "Retail",
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Hospitality",
    "Manufacturing",
  ];
  return (
    <Template>
      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: 'primary.main',
        p:2.5,
        height: 500,
        boxSizing: 'border-box',
        top:35,
       margin: ' auto',
        border: '1px solid ',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}>
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: "38px"
        }}>
          <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 2.5,
          }}
          >
            <Typography>Home</Typography>
            <Typography>Home</Typography>
            <Typography>Home</Typography>
          </Box>  
          <Box>
            <TextField
          select          
          variant="outlined"
          margin="normal"
          placeholder="Select Your Project"         
          value={project}
          onChange={(event) => setProject(event.target.value)}
          SelectProps={{
            IconComponent: ArrowDropDown,
            displayEmpty: true,
          }}
          InputProps={{
            sx: {
              borderRadius: 36,
              px: 2.5,
              py: 1.5,
              width: 263,
              height: 38,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.25,
              border: "1px solid",
            },
            
          }}
        >
          <MenuItem value="" disabled sx={{}}>
            Select Your Project
          </MenuItem>
          {Projects.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
            </TextField> 
          </Box>
          
        </Box>

        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          height: "38px",
          backgroundColor: 'primary.main',
          borderRadius: 2,
          px: 2,
          py:3,
          gap:5.25

        }}
        >
          <Image src="/overviewcontent.svg" alt="Logo" width={150} height={138} />
          <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 2.5,
          }}>
            <Typography> Welcome to your new project : [ProjectName]</Typography>
            <Button variant="contained" 
            sx={{
              
            }} >
              Project Settings
            </Button>
          </Box>
        </Box>

        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          height: 435,
          boxSizing: 'border-box',
          p:2.5,
          gap:2.5,
          borderRadius:2,
          border: '1px solid ',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}>
          <Typography>Onboarding Progress</Typography>
          <Typography>You've completed 2 of 6 steps onboarding</Typography>
          <LinearWithValueLabel />
          <Box>
            <Typography>What's next</Typography>
            <Button variant="contained">Start New Campaign</Button>
          </Box>
          <Stack>
            <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              gap: 1,
            }}>
              <CheckCircleOutlineRoundedIcon/>
              <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: 'text.primary',
                letterSpacing: 0,
              }}
              >User Type Selected</Typography>                

            </Box>
            <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              gap: 1,
            }}>
              <CheckCircleOutlineRoundedIcon/>
              <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: 'text.primary',
                letterSpacing: 0,
              }}
              >Project Created</Typography>                

            </Box>
            <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              gap: 1,
            }}>
              <CheckCircleOutlineRoundedIcon/>
              <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: 'text.primary',
                letterSpacing: 0,
              }}
              >Team Assigned</Typography>                

            </Box>
            <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              gap: 1,
            }}>
              <CheckCircleOutlineRoundedIcon/>
              <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: 'text.primary',
                letterSpacing: 0,
              }}
              >Access Control Setup</Typography>                

            </Box>
            <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              gap: 1,
            }}>
              <CancelOutlinedIcon/>
              <Box>
              <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: 'text.primary',
                letterSpacing: 0,
              }}
              >First Campaign Created</Typography>    
              <Link href="/onboarding/step4">
              <Typography>Create Campaign</Typography>
              </Link>

              </Box>

              <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                gap: 1,
              }}>
                <Button variant="contained">Start New Campaign</Button>
                <Button variant="contained">Connect Ad Accounts</Button>
                <Button variant="contained">Upload Media Assets</Button>
              </Box>
                          
              <Box>
                <Typography>KPI Summary</Typography>
               <Paper>
               <Image src="/overviewcontent.svg" alt="Logo" width={64} height={64} /> 
               <Box>
                <Box>
                <Typography>Total Revenue</Typography>    
                <InfoOutlineIcon/>            
                </Box>
                <Typography>$0.00</Typography>
               </Box>
               </Paper>
               <Paper>
               <Image src="/overviewcontent.svg" alt="Logo" width={64} height={64} /> 
               <Box>
                <Box>
                <Typography>Total Revenue</Typography>    
                <InfoOutlineIcon/>            
                </Box>
                <Typography>$0.00</Typography>
               </Box>
               </Paper>
               <Paper>
               <Image src="/overviewcontent.svg" alt="Logo" width={64} height={64} /> 
               <Box>
                <Box>
                <Typography>Total Revenue</Typography>    
                <InfoOutlineIcon/>            
                </Box>
                <Typography>$0.00</Typography>
               </Box>
               </Paper>
              </Box>

            </Box>
          
          </Stack>



        </Box>
      </Box>
      
    </Template>
  )
}

export default page