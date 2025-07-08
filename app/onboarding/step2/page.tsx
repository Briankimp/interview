"use client";
import React from "react";
import OnboardBox from "../components/onboardbox";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import InputField from "@/app/components/InputField";
import SelectInput from "@/app/components/SelectInput";
import TextAreaInput from "@/app/components/TextAreaInput";

const StepTwo = () => {
  const industries = [
    "Retail",
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Hospitality",
    "Manufacturing",
  ];
  const audiences = [
    "Retail",
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Hospitality",
    "Manufacturing",
  ];
  const [industry, setIndustry] = React.useState("");
  const [audience, setAudience] = React.useState("");
  return (
    <OnboardBox
      stepLabel="STEP 2 OF 4"
      continueLink="/onboarding/step3"
      subtitle="Fill in your company basic info"
      sectionTitle="COMPANY INFO"
      mainTitle="Onboarding"
      buttonText="CONTINUE"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: { md: 450, xs: "100%" },
          width: { md: 529, xs: "100%" },
          border: "1px solid",
          borderRadius: 2,
          px: { md: 5, xs: 2 },
          paddingTop: { md: 5, xs: 2 },
          paddingBottom: 5,
          gap: 2,
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            width: { md: 449, xs: "100%" },
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <InputField placeholder="Business Name" />
        </Box>

        <SelectInput
          placeholder="Select Your Industry"
          value={industry}
          onChange={(value) => setIndustry(value)}
          options={industries}
          emptyLabel="Select Your Industry"
        />
        <TextAreaInput
          placeholder="Description of Products/Services"
          rows={3}
        />

        <SelectInput
          placeholder="Select Your Audience"
          value={audience}
          onChange={(value) => setAudience(value)}
          options={audiences}
          emptyLabel="Select Your Audience"
        />

        <Box
          sx={{
            width: { md: 449, xs: "100%" },
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          <InputField placeholder="Website URL" />
        </Box>
      </Box>
    </OnboardBox>
  );
};

export default StepTwo;
