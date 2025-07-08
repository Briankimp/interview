import { Button, Typography, styled } from '@mui/material';
import { CheckCircleOutlineRounded } from '@mui/icons-material';

interface StatusButtonProps {
  status: string;
  icon?: React.ReactNode;
  sx?: any;
}

const StyledButton = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 1.25,
  paddingBottom: 1.25,
  paddingRight: 2.75,
  paddingLeft: 2.75,
  backgroundColor: 'success.main',
  borderRadius: 20,
  height: 38,
  width: 149,
  '&:hover': {
    backgroundColor: 'success.dark',
  },
});

const StatusButton: React.FC<StatusButtonProps> = ({ status, icon = <CheckCircleOutlineRounded />, sx }) => {
  return (
    <StyledButton
      variant="contained"
      startIcon={icon}
      sx={sx}
    >
      <Typography variant="h4" color="white">
        {status}
      </Typography>
    </StyledButton>
  );
};

export default StatusButton;
