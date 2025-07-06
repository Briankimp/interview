import React from 'react'
import OnboardBox from '../components/onboardbox'
import { Typography, Box, Stack, Button} from '@mui/material'
import Image from 'next/image'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ArrowForward from '@mui/icons-material/ArrowForward';
const Stepp4 = () => {
  return (
    <OnboardBox
    stepLabel="STEP 4 OF 4"
    continueLink="/onboarding/step4"
    subtitle="Create your first project to organize your clients and campaigns"
    sectionTitle="Create First Project"
    mainTitle="Onboarding"
    variant="outlined"
    buttonText="SKIP FOR NOW"
    height={769       
    }
    >
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: 385,
            width: 312,
            border: '1px solid',
            borderRadius: 2,
            padding: 3,
            gap: 1.5,
            borderColor: 'primary.main',
            // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
           
        }}>
            <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1.5,
                justifyContent: 'center',
            }}>
            <Image src="/project.svg" alt="Create" width={150} height={138} />
            <Typography
            sx={{
                fontSize: 18,
                fontWeight: 700,
                color: 'text.primary',
                letterSpacing: 0,
            }}>
                CREATE PROJECT
            </Typography>
            <Typography
            sx={{
                fontSize: 14,
                fontWeight: 400,
                color: '#7F7C86',
                letterSpacing: -1,
                height: 44,
                width: 264,
                textAlign: 'center',
                lineHeight: "160%",
                textTransform: 'none',
            }}>
            Empower your clients with unmatched productivity and peak performance
            </Typography>
          
            <Button variant="contained"  startIcon={<AddRoundedIcon />} 
             sx={{
                
                py: 2,

                borderRadius: 46,
                height: 52,
                width: 264,
                textTransform: 'none',
                gap: 2.5,
               
            }}>
                <Typography sx={{
                    fontSize: 18,
                    fontWeight: 500,

                   
                }}>
                    ADD PROJECT
                </Typography>
            </Button>
            </Box>
        </Box>
       
    </OnboardBox>
  )
}

export default Stepp4