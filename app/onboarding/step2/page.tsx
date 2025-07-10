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
import InputField from "@/components/InputField";
import SelectInput from "@/components/SelectInput";
import TextAreaInput from "@/components/TextAreaInput";

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
          borderColor: "lighert.main",
          borderWidth: 1,
          borderStyle: "solid",
          borderRadius: 2,
          px: { md: 5, xs: 1.5 },
          paddingTop: { md: 3, xs: 2 },
          paddingBottom: 5,
          gap: {md:2, xs:1},
          boxSizing: "border-box",
        }}
      >
      
          <InputField placeholder="Business Name" />


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
          placeholder="Who is your primary audience?"
          value={audience}
          onChange={(value) => setAudience(value)}
          options={audiences}
          emptyLabel="Who is your primary audience?"
        />

       
          <InputField placeholder="Website URL" />
        
      </Box>
    </OnboardBox>
  );
};

export default StepTwo;
