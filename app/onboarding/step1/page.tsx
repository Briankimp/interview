"use client"
import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
// import theme from '@/app/theme' (no longer needed, theme keys will be used in sx)
import ArrowForward from '@mui/icons-material/ArrowForward'
const StepOne = () => {
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
            height: 704,
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
                    Onboarding
                </Typography>
                <Typography sx={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: 'text.primary',
                    letterSpacing: 0,
                }}>
                    STEP 1
                </Typography>
                <Typography sx={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: 'text.primary',
                    letterSpacing: 0,
                }}>Select User Type</Typography>
                <Typography>Choose how You'll use the platform - as an individual or an agency</Typography>

            </Box>
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
            <Box sx={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'flex-end',
                width: '100%',
              
            }}>   
            <Button variant='contained' endIcon={<ArrowForward sx={{ fontSize: 24 }} />} sx={{
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
                    width: 91,
                    height: 27,
                    textAlign: "center",                    
                    display: "inline-block"
                }}>
                    CONTINUE
                </Typography>
            </Button>
            </Box>
            </Box>
    </Box>

  )
}

export default StepOne     