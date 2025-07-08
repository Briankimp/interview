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
      }}
    >
      <Box sx={{ position: "absolute", top: 33, left: 33 }}>
        <Image src="/logo.svg" alt="Logo" width={171} height={44} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
          width: 1069,
          mx: 11,
          my: 11,
          paddingTop: 5,
          paddingBottom: 6.25,
          paddingLeft: 5,
          paddingRight: 5,
          gap: 5,
          border: "1px solid",
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.25,
            width: "100%",
          }}
        >
          <Typography variant="h1" color="text.primary">{mainTitle}</Typography>
<Typography variant="h5" color="text.primary">{stepLabel}</Typography>
<Typography variant="h4" color="text.primary">{sectionTitle}</Typography>
<Typography variant="h5" color="text.primary">{subtitle}</Typography>
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
