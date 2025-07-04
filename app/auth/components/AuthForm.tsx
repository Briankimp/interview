"use client";

import React from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import Image from "next/image";
import Google from "@mui/icons-material/Google";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import ArrowForward from "@mui/icons-material/ArrowForward";
import theme from "@/app/theme";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import Paper from "@mui/material/Paper";

export default function AuthForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box sx={{ height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
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
                width: 456,
                minHeight: 570,
                p: 3.75,
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 3.75,
                margin: "auto",
                // position: 'relative',
                my: 23.625,

                // boxShadow: "0px 4px 4px 0 rgba(0.25, 0.25, 0.25, 0.25)",
              }}
            >
              <Typography
                variant="h5"
                fontWeight={600}
                textAlign="center"
                sx={{ fontSize: 34 }}
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
                }}
              >
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  defaultValue="Email"
                  InputProps={{
                    sx: {
                      borderRadius: 36,
                      px: 2.125,
                      py: 3.75,
                      width: 396,
                      height: 61,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1.25,
                    },
                  }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  margin="normal"
                  defaultValue="Password"
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                    sx: {
                      borderRadius: 36,
                      px: 2.125,
                      py: 3.75,
                      width: 396,
                      height: 61,
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: 396,
                }}
              >
                <FormControlLabel
                  control={<Checkbox defaultChecked size="small" />}
                  label={<Typography fontSize={14}>Remember me</Typography>}
                />
                <Typography
                  fontSize={14}
                  color="primary"
                  sx={{ cursor: "pointer", fontWeight: 600 }}
                >
                  Forget password?
                </Typography>
              </Box>

              <Button
                variant="contained"
                endIcon={<ArrowForward sx={{ fontSize: 24 }} />}
                color="primary"
                sx={(theme) => ({
                  pt: 2,
                  pb: 2,
                  pr: 12,
                  pl: 14,
                  borderRadius: 46,
                  gap: 2.5,
                  height: 64,
                  width: 396,
                })}
              >
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#FFFFFF",
                    width: 91,
                    height: 27,
                    textAlign: "center",
                    lineHeight: "27px",
                    display: "inline-block",
                  }}
                >
                  CONTINUE
                </Typography>
              </Button>

              <Typography variant="body2" align="center">
                New here?{" "}
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
                sx={(theme) => ({
                  textTransform: "none",
                  borderRadius: 46,
                  height: 61,
                  width: 396,
                })}
              >
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 500,
                  color: theme.palette.text.primary,
                  
                }}
              >
                  Sign in with Google
              </Typography>
              </Button>
              
            </Box>
          </Box>
        </Box>

        <Box
          sx={{ flex: 1, backgroundColor: "red" }}
          bgcolor="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          //bgcolor="#0E0C14"
          position="relative"
        >
          <Box textAlign="center" color="white" maxWidth={400} px={2}>
            {/* <Image
            src="/sideimage.svg" // Save your 3D image to /public
            alt="Marketing Illustration"
            width={720}
            height={1024}
          />  */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
