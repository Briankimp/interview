import React from 'react'
import OnboardBox from '../components/onboardbox'
import { Typography } from '@mui/material'

const StepThree = () => {
  return (
    <OnboardBox
    stepLabel="STEP 3 OF 4"
    continueLink="/onboarding/step4"
    subtitle="Connect your accounts to start running ads"
    sectionTitle="Link Account"
    mainTitle="Onboarding"
    buttonText="CONTINUE"
    >
    <Typography>Step Three</Typography>
    </OnboardBox>
  )
}

export default StepThree