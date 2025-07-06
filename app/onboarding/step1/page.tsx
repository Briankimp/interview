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
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 3.25,
                width:989,
                height: 320,
            }}>
                <Paper sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border:"1px solid",
                    borderRadius: 2,
                    height: 320,
                    width: 312.33,
                    p: 3,
                    gap: 1.5,
                }}>
                    <Image src='/corporate.svg' alt='corporate' width={150} height={150}/>
                    <Typography 
                    sx={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: 'text.primary',
                        letterSpacing: 0,
                        width: 264.33,
                        height: 27,
                        textAlign: "center",
                        lineHeight: "27px", 
                        display: "inline-block"
                    }}
                        >CORPORATIONS</Typography>
                    <Typography 
                    sx={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: 'text.primary',
                        letterSpacing: 0,
                        width: 264.33,
                        height: 66,
                        textAlign: "left",
                        lineHeight: "160%", 
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
                    height: 320,
                    width: 312.33,
                    p: 3,
                    gap: 1.5,
                }}>
                    <Image src='/digitalm.svg' alt='agency' width={150} height={150}/>
                    <Typography 
                    sx={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: 'text.primary',
                        letterSpacing: 0,
                        width: 264.33,
                        height: 54,
                        textAlign: "center",
                        lineHeight: "27px", 
                        display: "inline-block"
                    }}
                        >DIGITAL MARKETING AGENCIES</Typography>
                    <Typography 
                    sx={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: 'text.primary',
                        letterSpacing: 0,
                        width: 264.33,
                        height: 66,
                        textAlign: "left",
                        lineHeight: "160%", 
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
                    height: 320,
                    width: 312.33,
                    p: 3,
                    gap: 1.5,
                }}>
                    <Image src='/freelancer.svg' alt='agency' width={150} height={150}/>
                    <Typography 
                    sx={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: 'text.primary',
                        letterSpacing: 0,
                        width: 264.33,
                        height: 27,
                        textAlign: "center",
                        lineHeight: "27px", 
                        display: "inline-block"
                    }}
                        >FREELANCERS</Typography>
                    <Typography 
                    sx={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: 'text.primary',
                        letterSpacing: 0,
                        width: 264.33,
                        height: 66,
                        textAlign: "left",
                        lineHeight: "160%", 
                    }}
                        >Build your portfolio to showcase your services and past work</Typography>
                </Paper>
            </Box>
    </OnboardBox>

  )
}

export default StepOne     