"use client"
import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

import OnboardBox from '../components/onboardbox'
const StepOne = () => {
  return (
    <OnboardBox
    stepLabel="STEP 1"
    continueLink="/onboarding/step2"
    subtitle="Choose how You'll use the platform - as an individual or an agency"
    sectionTitle="Select User Type"
    mainTitle="Onboarding"
    buttonText="CONTINUE"
    >
        <Box   
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: 2, sm: 3.25 },
                width: { xs: '100%', md: 989 },
                height: { xs: 'auto', md: 320 },
                flexWrap: 'wrap',
                p: { xs: 2, sm: 0 }
            }}>
                <Paper sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border:"1px solid",
                    borderRadius: 2,
                    height: { xs: 'auto', md: 320 },
                    width: { xs: '100%', md: 312.33 },
                    p: { xs: 2, md: 3 },
                    gap: { xs: 1, md: 1.5 },
                    maxWidth: 312.33,
                    boxSizing: 'border-box'
                }}>
                    <Image 
                        src='/corporate.svg' 
                        alt='corporate' 
                        width={150} 
                        height={150}
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    <Typography 
                    sx={{
                        fontSize: { xs: 16, sm: 18 },
                        fontWeight: 700,
                        color: 'text.primary',
                        letterSpacing: 0,
                        width: { xs: '100%', sm: 264.33 },
                        textAlign: "center",
                        lineHeight: { xs: 1.5, sm: '27px' },
                        display: "block",
                        wordBreak: 'break-word'
                    }}
                        >CORPORATIONS</Typography>
                    <Typography 
                    sx={{
                        fontSize: { xs: 13, sm: 14 },
                        fontWeight: 400,
                        color: 'text.primary',
                        letterSpacing: 0,
                        width: { xs: '100%', sm: 264.33 },
                        textAlign: "left",
                        lineHeight: { xs: 1.5, sm: '160%' },
                        wordBreak: 'break-word'
                    }}
                        >Set up your company and link marketing accounts to start campaigns.</Typography>
                </Paper>
                <Paper sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border:"1px solid",
                    borderRadius: 2,
                    height: { xs: 'auto', sm: 320 },
                    width: { xs: '100%', sm: 312.33 },
                    p: { xs: 2, sm: 3 },
                    gap: { xs: 1, sm: 1.5 },
                    maxWidth: 312.33,
                    boxSizing: 'border-box'
                }}>
                    <Image src='/digitalm.svg' alt='agency' width={150} height={150}/>
                    <Typography 
                    sx={{
                        fontSize: { xs: 16, sm: 18 },
                        fontWeight: 700,
                        color: 'text.primary',
                        letterSpacing: 0,
                        width: { xs: '100%', sm: 264.33 },
                        textAlign: "center",
                        lineHeight: { xs: 1.5, sm: '27px' },
                        display: "block",
                        wordBreak: 'break-word'
                    }}
                        >DIGITAL MARKETING AGENCIES</Typography>
                    <Typography 
                    sx={{
                        fontSize: { xs: 13, sm: 14 },
                        fontWeight: 400,
                        color: 'text.primary',
                        letterSpacing: 0,
                        width: { xs: '100%', sm: 264.33 },
                        textAlign: "left",
                        lineHeight: { xs: 1.5, sm: '160%' },
                        wordBreak: 'break-word'
                    }}
                        >Create your agency profile and invite clients to run their campaigns.</Typography>
                </Paper>
                <Paper
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border:"1px solid",
                    borderRadius: 2,
                    height: { xs: 'auto', sm: 320 },
                    width: { xs: '100%', sm: 312.33 },
                    p: { xs: 2, sm: 3 },
                    gap: { xs: 1, sm: 1.5 },
                    maxWidth: 312.33,
                    boxSizing: 'border-box'
                }}>
                    <Image src='/freelancer.svg' alt='agency' width={150} height={150}/>
                    <Typography 
                    sx={{
                        fontSize: { xs: 16, sm: 18 },
                        fontWeight: 700,
                        color: 'text.primary',
                        letterSpacing: 0,
                        width: { xs: '100%', sm: 264.33 },
                        textAlign: "center",
                        lineHeight: { xs: 1.5, sm: '27px' },
                        display: "block",
                        wordBreak: 'break-word'
                    }}>FREELANCERS</Typography>
                    <Typography 
                    sx={{
                        fontSize: { xs: 13, sm: 14 },
                        fontWeight: 400,
                        color: 'text.primary',
                        letterSpacing: 0,
                        width: { xs: '100%', sm: 264.33 },
                        textAlign: "left",
                        lineHeight: { xs: 1.5, sm: '160%' },
                        wordBreak: 'break-word'
                    }}
                        >Build your portfolio to showcase your services and past work</Typography>
                </Paper>
            </Box>
    </OnboardBox>

  )
}

export default StepOne     