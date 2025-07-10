import React from "react";
import OnboardBox from "../components/onboardbox";
import { Typography, Box, Stack, Button, Link } from "@mui/material";
import Image from "next/image";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowForward from "@mui/icons-material/ArrowForward";
const Stepp4 = () => {
  return (
    <OnboardBox
      stepLabel="STEP 4 OF 4"
      continueLink="/overview"
      subtitle="Create your first project to organize your clients and campaigns"
      sectionTitle="Create First Project"
      mainTitle="Onboarding"
      variant="outlined"
      buttonText="SKIP FOR NOW"
     // height={769}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: 385,
          width: {md:312, xs:264},
          border: "1px solid",
          borderRadius: 2,
          padding: 3,
          gap: 1.5,
          borderColor: "lighert.main",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.5,
            justifyContent: "center",
          }}
        >
          <Image src="/project.svg" alt="Create" width={150} height={138} />
          <Typography variant="h3">CREATE PROJECT</Typography>
          <Typography
            variant="h5"
           color="lighert.text"
            textAlign="center"
            sx={{
              ///height: 44,
              width: 264,
              lineHeight: "160%",
              textTransform: "none",
            }}
          >
            Empower your clients with unmatched productivity and peak
            performance
          </Typography>

          <Button
            variant="contained"
            startIcon={<AddRoundedIcon />}
            sx={{
              py: 2,

              borderRadius: 46,
              height: 52,
              width: 264,
              textTransform: "none",
              gap: 2.5,
            }}
          >
            <Link href="/overview">
            <Typography variant="h4" 
            sx={{
              color: "dashboardText.white",
            }}
            >ADD PROJECT</Typography>
            </Link>
          </Button>
        </Box>
      </Box>
    </OnboardBox>
  );
};

export default Stepp4;
