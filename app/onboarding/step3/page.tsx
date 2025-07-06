import React from 'react'
import OnboardBox from '../components/onboardbox'
import { Typography, Box, Stack, Button} from '@mui/material'
import Image from 'next/image'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
const StepThree = () => {
  return (
    <OnboardBox
    stepLabel="STEP 3 OF 4"
    continueLink="/onboarding/step4"
    subtitle="Connect your accounts to start running ads"
    sectionTitle="Link Account"
    mainTitle="Onboarding"
    height={825}
    variant="outlined"
    buttonText="SKIP FOR NOW"
    >
        
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: 441,
            width: 529,
            border: '1px solid',
            borderRadius: 2,
            px: 5,
            paddingTop: 5,
            paddingBottom: 6.25,
            gap: 2.75,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}>

            <Typography sx={{
                fontSize: 18,
                fontWeight: 600, 
                color: 'text.primary',
                letterSpacing: 0,           
                }}> 
                Choose Platform
                </Typography>

                <Stack 
                spacing={2}
                sx={{
                    height: 302,
                    gap: 1.5
                }}
                width="100%">
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 3.5,   
                        width: '100%',                    
                    }}>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 1,
                            
                        }}>
                            <Image src="/facebook.svg" alt="Facebook" width={28} height={28} />
                            <Typography>Facebook</Typography>
                        </Box>
                        <Button sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pt: 1.25,
                            pb: 1.25,
                            pr: 2.75,
                            pl: 2.75,
                            borderRadius: 20,
                            height: 38,
                            width: 118
                        }} variant="contained" startIcon={<AddRoundedIcon />}>
                            
                            <Typography sx={{
                                 fontSize: 14,
                                 fontWeight: 500,
                                 color: '#FFFFFF',
                                 }}
                                 >
                                    Connect
                            </Typography>
                        </Button>
                    </Box>
                    <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            gap: 2,
                                        }}>
                                            <Box sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                gap: 1,
                                            }}>
                                            <Image src="/tiktok.svg" alt="Tiktok" width={28} height={28} />
                                            <Typography>Tiktok</Typography>
                                            </Box>
                                            <Button sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                pt: 1.25,
                                                pb: 1.25,
                                                pr: 2.75,
                                                pl: 2.75,
                                                borderRadius: 20,                            
                                                height: 38,
                                                width: 118
                                            }} variant="contained" startIcon={<AddRoundedIcon />} >
                                                <Typography
                                                sx={{
                                                    fontSize: 14,
                                                    fontWeight: 500,
                                                    color: '#FFFFFF',
                                                }}>
                                                    Connect
                                                </Typography>
                                            </Button>
                                            </Box>
                    
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2,
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 1,
                        }}>
                        <Image src="/snapchat.svg" alt="Snapchat" width={28} height={28} />
                        <Typography>Snapchat</Typography>
                        </Box>
                        <Button sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pt: 1.25,
                            pb: 1.25,
                            pr: 2.75,
                            pl: 2.75,
                            borderRadius: 20,                            
                            height: 38,
                            width: 118
                        }} variant="contained" startIcon={<AddRoundedIcon />} >
                            <Typography
                            sx={{
                                fontSize: 14,
                                fontWeight: 500,
                                color: '#FFFFFF',
                            }}>
                                Connect
                            </Typography>
                        </Button>
                        </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2,
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 1,
                        }}>
                        <Image src="/instagram.svg" alt="Instagram" width={28} height={28} />
                        <Typography>Instagram</Typography>
                        </Box>
                        <Button sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pt: 1.25,
                            pb: 1.25,
                            pr: 2.75,
                            pl: 2.75,
                            borderRadius: 20,
                           
                            height: 38,
                            width: 118,
                           
                        }} startIcon={<AddRoundedIcon />} variant="contained">
                            <Typography sx={{
                                 fontSize: 14,
                                 fontWeight: 500,
                                 color: '#FFFFFF',
                                 }}>
                                    Connect
                            </Typography>
                        </Button>
                        
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2,
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 1,
                        }}>
                            <Image src="/google.svg" alt="Google" width={28} height={28} />
                            <Typography>Google</Typography>
                        </Box>
                        <Button sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pt: 1.25,
                            pb: 1.25,
                            pr: 2.75,
                            pl: 2.75,
                            borderRadius: 20,
                            height: 38,
                            width: 118,
                            
                        }} startIcon={<AddRoundedIcon />} variant="contained">
                            <Typography sx={{
                                 fontSize: 14,
                                 fontWeight: 500,
                                 color: '#FFFFFF',
                                 }}>
                                    Connect
                            </Typography>
                        </Button>
                        </Box>
                </Stack>
        </Box>
    </OnboardBox>
  );
}
export default StepThree