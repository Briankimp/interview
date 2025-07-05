import { Typography } from '@mui/material'
import React from 'react'
import OnboardBox from '../components/onboardbox'

const StepFour = () => {
  return (
    <OnboardBox
    stepLabel="STEP 4 OF 4"
    continueLink="/onboarding/step4"
    subtitle="Create your first project to organize your clients campaigns"
    sectionTitle="Create First Project"
    mainTitle="Onboarding"
    buttonText="Skip For Now"
    >
    <Typography>Step Four</Typography>
    </OnboardBox>
  )
}

export default StepFour