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
            <Typography variant="h3">
                CREATE PROJECT
            </Typography>
            <Typography variant="h5" color="#7F7C86" textAlign="center" sx={{
                height: 44,
                width: 264,
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
                <Typography variant="h4">
                    ADD PROJECT
                </Typography>
            </Button>
            </Box>
        </Box>
       
    </OnboardBox>
  )
}

export default Stepp4