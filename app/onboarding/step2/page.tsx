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
      height={920}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: 536,
          width: 529,
          border: "1px solid",
          borderRadius: 2,
          px: 5,
          paddingTop: 5,
          paddingBottom: 6.25,
          gap: 2.75,
        
        }}
      >
        <TextField
          
          variant="outlined"
          margin="normal"
          placeholder="Business Name"
          InputProps={{
            sx: {
              borderRadius: 36,
              px: 2.125,
              py: 3.75,
              width: 449,
              height: 61,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.25,
              border: "1px solid",
            },
          }}
        />

        <TextField
          select
          
          variant="outlined"
          margin="normal"
          placeholder="Select Your Industry"         
          value={industry}
          onChange={(event) => setIndustry(event.target.value)}
          SelectProps={{
            IconComponent: ArrowDropDown,
            displayEmpty: true,
          }}
          InputProps={{
            sx: {
              borderRadius: 36,
              px: 2.125,
              py: 3.75,
              width: 449,
              height: 61,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.25,
              border: "1px solid",
            },
            
          }}
        >
          <MenuItem value="" disabled sx={{}}>
            Select Your Industry
          </MenuItem>
          {industries.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          multiline
          rows={4}
          
          variant="outlined"
          margin="normal"
          placeholder="Description of Products/Services"
          InputProps={{
            sx: {
              borderRadius: 2,
              px: 2.125,
              py: 3.75,
              width: 449,
              height: 126,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.25,
              border: "1px solid",
            },
          }}
        />
      <TextField
  select
  variant="outlined"
  margin="normal"
  value={audience}
  onChange={(event) => setAudience(event.target.value)}
  SelectProps={{
    IconComponent: ArrowDropDown,
    displayEmpty: true, 
  }}
  InputProps={{
    sx: {
      borderRadius: 36,
      px: 2.125,
      py: 3.75,
      width: 449,
      height: 61,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 1.25,
      border: "1px solid",
    },
  }}
>
  <MenuItem value="" disabled>
    Select Your Audience
  </MenuItem>
  {audiences.map((option) => (
    <MenuItem key={option} value={option}>
      {option}
    </MenuItem>
  ))}
</TextField>

        <TextField
          
          variant="outlined"
          margin="normal"
          placeholder="Website URL"
          InputProps={{
            sx: {
              borderRadius: 36,
              px: 2.125,
              py: 3.75,
              width: 449,
              height: 61,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.25,
              border: "1px solid",
            },
          }}
        />
      </Box>
    </OnboardBox>
  );
};

export default StepTwo;

