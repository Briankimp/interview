"use client"
import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Link from 'next/link'
interface OnboardBoxProps {
  children: React.ReactNode;
  stepLabel?: string;
  continueLink?: string;
  subtitle?: string;
  sectionTitle?: string;
  mainTitle?: string;
  buttonText?: string;
  height?: number;
  variant?: 'contained' | 'outlined' | 'text';
}

const OnboardBox = ({
  children,
  stepLabel = 'STEP 1',
  continueLink = '/onboarding/step2',
  subtitle = "Choose how You'll use the platform - as an individual or an agency",
  sectionTitle = 'Select User Type',
  mainTitle = 'Onboarding',
  variant = 'contained',
  buttonText = 'CONTINUE',
  height = 704,
}: OnboardBoxProps) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative' }}>
         <Box sx={{ position: "absolute", top: 33, left: 33 }}>
                    <Image src="/logo.svg" alt="Logo" width={171} height={44} />
                  </Box>
        <Box
        sx={ {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center',
            height: height,
            width: 1069,
            mx: 11,
            my: 11,
            paddingTop: 5,
            paddingBottom: 6.25,
            paddingLeft: 5,
            paddingRight: 5,
            gap: 5,
            border:"1px solid",
            borderRadius: 2,

        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1.25,
            }}>
                <Typography sx={{
                    fontSize: 34,
                    fontWeight: 600,
                    color: 'text.primary',
                    letterSpacing: 0,
                }}>
                    {mainTitle}
                </Typography>
                <Typography sx={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: 'text.primary',
                    letterSpacing: 0,
                }}>
                    {stepLabel}
                </Typography>
                <Typography sx={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: 'text.primary',
                    letterSpacing: 0,
                }}>{sectionTitle}</Typography>
                <Typography>{subtitle}</Typography>

            </Box>
            {children}
            
            <Box sx={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'flex-end',
                width: '100%',
              
            }}> 
            <Link href={continueLink}>  
            <Button variant={variant} endIcon={<ArrowForward/>}
             sx={{
                fontSize: 24,
                pt: 2,
                pb: 2,
                pr: 12,
                pl: 14,
                borderRadius: 46,
                gap: 2.5,
                height: 64,
                width: 396
            }}>
                <Typography sx={{
                    fontSize: 18,
                    fontWeight: 500,
                    // width: 91,
                    // height: 27,
                    textAlign: "center",                    
                    // display: "inline-block"
                }}>
                    {buttonText}
                </Typography>
            </Button>
            </Link>
            </Box>
            </Box>
    </Box>

  )
}

export default OnboardBox     