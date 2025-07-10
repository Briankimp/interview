"use client";
import React, { useState } from "react";
import OnboardBox from "../components/onboardbox";
import { Typography, Box, Stack, Button } from "@mui/material";
import Image from "next/image";
import ActionButton from "@/components/ActionButton";
const StepThree = () => {
  const [status, setStatus] = useState<"action" | "success">("action");
  const [tiktokStatus, setTiktokStatus] = useState<"action" | "error">(
    "action"
  );
  const PlatformRow = ({
    iconSrc,
    label,
    status,
    onClick,
  }: {
    iconSrc: string;
    label: string;
    status: "action" | "success";
    onClick: () => void;
  }) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 3.5,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Image src={iconSrc} alt={label} width={28} height={28} />
        <Typography variant="h4" sx={{ fontSize: 16 }}>{label}</Typography>
      </Box>
      <ActionButton
        text={status === "action" ? "Connect" : "Connected"}
        status={status}
        onClick={onClick}
      />
    </Box>
  );
  return (
    <OnboardBox
      stepLabel="STEP 3 OF 4"
      continueLink="/onboarding/step4"
      subtitle="Connect your accounts to start running ads"
      sectionTitle="Link Account"
      mainTitle="Onboarding"
      variant="outlined"
      buttonText="SKIP FOR NOW"
    >
      <Box
        sx={{          
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: { md: 450, xs: "100%" },
          width: { md: 529, xs: "100%" },
          borderRadius: 2,
          borderColor: "lighter.main",
          borderWidth: 1,
          borderStyle: "solid",
          px: { md: 5, xs: 2 },
          paddingTop: { md: 5, xs: 2 },
          paddingBottom: 5,
          gap: 2,
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: 18,
            fontWeight: 600,
            color: "text.primary",
            letterSpacing: 0,
          }}
        >
          Choose Platform
        </Typography>

        <Stack
          spacing={2}
          sx={{
            height: 302,
            gap: 1.5,
          }}
          width="100%"
        >
          <PlatformRow
            iconSrc="/facebook.svg"
            label="Facebook"
            status={status}
            onClick={() => {
              if (status === "action") setStatus("success");
            }}
          />

          <PlatformRow
            iconSrc="/snapchat.svg"
            label="Snapchat"
            status={status}
            onClick={() => {
              if (status === "action") setStatus("success");
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",

                  gap: 1,
                  width: "100%",
                }}
              >
                <Image src="/tiktok.svg" alt="Tiktok" width={28} height={28} />
                <Typography>Tiktok</Typography>
              </Box>

              <Box>
                {tiktokStatus === "action" ? (
                  <ActionButton
                    text="Connect"
                    status="action"
                    onClick={() => setTiktokStatus("error")}
                  />
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 1,
                    }}
                  >
                    <Button
                      variant="text"
                      startIcon={
                        <Image
                          src="/retry.svg"
                          width={15.03}
                          height={13.75}
                          alt="Retry"
                        />
                      }
                      onClick={() => setTiktokStatus("action")}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: "text.primary",
                          textDecoration: "underline",
                          textDecorationColor: "text.primary",
                        }}
                      >
                        Retry
                      </Typography>
                    </Button>
                    <ActionButton text="Failed" status="error" />
                  </Box>
                )}
              </Box>
            </Box>
          </Box>

          <PlatformRow
            iconSrc="/instagram.svg"
            label="Instagram"
            status="action"
            onClick={() => {
              if (status === "action") setStatus("success");
            }}
          />

          <PlatformRow
            iconSrc="/google.svg"
            label="Google"
            status="action"
            onClick={() => {
              if (status === "action") setStatus("success");
            }}
          />
        </Stack>
      </Box>
    </OnboardBox>
  );
};
export default StepThree;
