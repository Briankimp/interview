"use client";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

import OnboardBox from "../components/onboardbox";
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
          flex: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2, sm: 3.25 },
          overflowY: "auto",
          p: { xs: 2, sm: 0 },
        }}
      >
        <Paper
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid",
            borderRadius: 2,
            height: { xs: "auto", sm: 320 },
            p: { xs: 2, sm: 3 },
            gap: { xs: 1, sm: 1.5 },
            boxSizing: "border-box",
          }}
        >
          <Image
            src="/corporate.svg"
            alt="corporate"
            width={150}
            height={150}
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
            CORPORATIONS
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              color: "text.primary",
            }}
          >
            Set up your company and link marketing accounts to start campaigns.
          </Typography>
        </Paper>
        <Paper
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid",
            borderRadius: 2,
            height: { xs: "auto", sm: 320 },

            p: { xs: 2, sm: 3 },
            gap: { xs: 1, sm: 1.5 },

            boxSizing: "border-box",
          }}
        >
          <Image src="/digitalm.svg" alt="agency" width={150} height={150} />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "text.primary",
            }}
          >
            DIGITAL MARKETING AGENCIES
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: 13, sm: 14 },
              fontWeight: 400,
              color: "text.primary",
              letterSpacing: 0,
              //width: { xs: '100%', sm: 264.33 },
              textAlign: "left",
              lineHeight: { xs: 1.5, sm: "160%" },
              wordBreak: "break-word",
            }}
          >
            Create your agency profile and invite clients to run their
            campaigns.
          </Typography>
        </Paper>
        <Paper
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid",
            borderRadius: 2,
            height: { xs: "auto", sm: 320 },
            p: { xs: 2, sm: 3 },
            gap: { xs: 1, sm: 1.5 },
            boxSizing: "border-box",
          }}
        >
          <Image src="/freelancer.svg" alt="agency" width={150} height={150} />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "text.primary",
              lineHeight: { xs: 1.5, sm: "27px" },
            }}
          >
            FREELANCERS
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              color: "text.primary",
              letterSpacing: 0,
              textAlign: "left",
              lineHeight: { xs: 1.5, sm: "160%" },
              wordBreak: "break-word",
            }}
          >
            Build your portfolio to showcase your services and past work
          </Typography>
        </Paper>
      </Box>
    </OnboardBox>
  );
};

export default StepOne;
