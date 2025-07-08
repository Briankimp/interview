"use client";

import React from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import Image from "next/image";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ArrowForward from "@mui/icons-material/ArrowForward";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import Link from "next/link";
import ContinueButton from "@/app/components/ContinueButton";
import InputField from "@/app/components/InputField";

export default function AuthForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box sx={{ height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: {md:"row", xs:"column"},
          width: "100%",
          height: "100%",
        }}
      >
        <Box sx={{ flex: 1, position: "relative" }}>

          <Box sx={{ position: "absolute", top: 33, left: 33 }}>
            <Image src="/logo.svg" alt="Logo" width={171} height={44} />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box
              sx={{
                width: {md: 456, sm: 320},
                minHeight: 570,
                p: 3.75,
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 3.75,
                margin: "auto",
                my: 23.625,
                boxSizing: "border-box",
              }}
            >
              <Typography
                variant="h1"                
                textAlign="center"
               
              >
                Sign In
              </Typography>

              <Box
                sx={{
                  gap: 2.5,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >

                <InputField               
                
                placeholder="Email"               
                />

                <InputField                
                   
                    placeholder="Password" 
                     type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),                 
                }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <FormControlLabel

                  control={<Checkbox defaultChecked size="small"
                     />}
                  label={<Typography fontSize={14}>Remember me</Typography>}
                />
                <Typography
                 variant="h5"
                  color="primary"
                  sx={{ cursor: "pointer", fontWeight: 600 }}
                >
                  Forget password?
                </Typography>
              </Box>

             
                  <ContinueButton

                  variant="contained" 
                  href="/onboarding/step1"
                  >CONTINUE</ContinueButton>  

              <Typography
               variant="body2" align="center">
                New here?
                <Typography
                  component="span"
                  color="primary"
                  sx={{
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: 1,
                    textDecoration: "underline",
                  }}
                >
                  Sign up
                </Typography>
              </Typography>

              <Button
                fullWidth
                variant="outlined"
                startIcon={
                  <Image
                    src="/google.svg"
                    alt="Google"
                    width={24}
                    height={28}
                  />
                }
                sx={{
                  textTransform: "none",
                  borderRadius: 46,
                  height: {sm:50, md:61},
                  // width: {md:396, sm:200},
                  boxSizing: "border-box",
                }}
              >
              <Typography
                variant="h4"
                sx={{
                  color: 'text.primary'
                }}
              >
                  Sign in with Google
              </Typography>
              </Button>

            
            </Box>
          </Box>
        </Box>

        <Box
          sx={{ flex: 1, backgroundColor: 'primary.main'}}
         // bgcolor="white"
          display="flex"
          justifyContent="center"
          alignItems="center"

          position="relative"
        >
          <Box textAlign="center" color="white" maxWidth={400} px={2}>

          </Box>
        </Box>
      </Box>
    </Box>
  );
}
