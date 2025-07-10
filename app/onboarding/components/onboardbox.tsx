"use client";
import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import ContinueButton from "@/components/ContinueButton";
interface OnboardBoxProps {
  children: React.ReactNode;
  stepLabel?: string;
  continueLink?: string;
  subtitle?: string;
  sectionTitle?: string;
  mainTitle?: string;
  buttonText?: string;
  height?: number;
  variant?: "contained" | "outlined" | "text";
}

const OnboardBox = ({
  children,
  stepLabel = "STEP 1",
  continueLink = "/onboarding/step2",
  subtitle = "Choose how You'll use the platform - as an individual or an agency",
  sectionTitle = "Select User Type",
  mainTitle = "Onboarding",
  variant = "contained",
  buttonText = "CONTINUE",
}: OnboardBoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <Box
       sx={{ position: "absolute", top: {md:33, xs:10, sm:10, lg:33}, left: {md:33, xs:10, sm:10, lg:33} }}>
        <Image src="/logo.svg" alt="Logo" width={171} height={44} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
          width: 1069,
          m: {md:11, xs:11, sm:10, lg:11},
          marginTop:{md:0, xs:11, sm:10, lg:11},
          // paddingTop: 5,
          // paddingBottom: 6.25,
          // paddingLeft: 5,
          // paddingRight: 5
          // p-5,
          p:{md:5, xs:2},
          gap: 5,
          borderColor: "lighert.main",
          borderWidth: 1,
          borderStyle: "solid",
          borderRadius: 2,
          boxSizing: {md:"border-box", xs:"border-box"},
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap:1.25,
            width: "100%",
            boxSizing: {md:"border-box", xs:"border-box"},
          }}
        >
          <Typography variant="h1" sx={{
            
          }} color="text.secondary">{mainTitle}</Typography>
          <Typography variant="h5" color="text.secondary">{stepLabel}</Typography>
          <Typography variant="h4" color="text.primary" sx={{
            fontWeight: 700,
          }}>{sectionTitle}</Typography>
          <Typography variant="h5" sx={{
            fontWeight: 400,
          }} color="text.secondary">{subtitle}</Typography>
        </Box>

        {children}

        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <Link href={continueLink}>
            <ContinueButton href={continueLink} variant={variant}>
              {buttonText}
            </ContinueButton>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default OnboardBox;
