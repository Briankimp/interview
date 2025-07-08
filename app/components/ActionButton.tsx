import { Button, Typography, styled } from '@mui/material';
import { CheckCircleOutlineRounded, AddRounded, CancelOutlined } from '@mui/icons-material';
import theme from '../theme';

interface ActionButtonProps {
  text: string;
  status?: 'success' | 'error' | 'action';
  icon?: React.ReactNode;
  width?: number;
  onClick?: () => void;
  sx?: any;
}

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'status' && prop !== 'width',
})<{ status?: 'success' | 'error' | 'action'; width?: number }>(
  ({ theme, status, width }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 1.25,
    paddingBottom: 1.25,
    paddingRight: 2.75,
    paddingLeft: 2.75,
    borderRadius: 20,
    height: 38,
    width: width ?? (status === 'success' ? 149 : 118),
    backgroundColor:
      status === 'success'
        ? theme.palette.success.main
        : status === 'error'
        ? theme.palette.error.main
        : theme.palette.primary.main,
    '&:hover': {
      backgroundColor:
        status === 'success'
          ? theme.palette.success.dark
          : status === 'error'
          ? theme.palette.error.dark
          : theme.palette.primary.dark,
    },
    '&:disabled': {
      opacity: 0.7,
      cursor: 'not-allowed',
    },
  })
);

const ActionButton: React.FC<ActionButtonProps> = ({ 
  text, 
  status = 'action', 
  icon = status === 'success' ? <CheckCircleOutlineRounded /> : 
         status === 'error' ? <CancelOutlined /> : 
         <AddRounded />,
  width = status === 'success' ? 149 : 118,
  onClick,
  sx,
}) => {
  return (
    <StyledButton
      variant="contained"
      startIcon={icon}
      status={status}
      width={width}
      onClick={onClick}
      sx={sx}
    >
      <Typography variant="h4" color="white">
        {text}
      </Typography>
    </StyledButton>
  );
};

export default ActionButton;
