import React from 'react';
import { styled, Button as MuiButton, ButtonProps, Theme } from '@mui/material';
import { CancelOutlined, EmojiFlags } from '@mui/icons-material';

interface DashboardButtonProps extends ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const StyledButton = styled(MuiButton)<DashboardButtonProps>(({ theme, variant }: { theme: Theme; variant?: string }) => ({
  borderRadius: theme.spacing(2),
  height: theme.spacing(4.5),
  padding: theme.spacing(2),
  gap: theme.spacing(1),
  textTransform: 'none',
  boxSizing: 'border-box',
  
  '&.MuiButton-contained': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.dashboardText.white,
    
    '& .MuiButton-startIcon': {
      color: theme.palette.dashboardText.white,
    },

    '& .MuiButton-endIcon': {
      color: theme.palette.dashboardText.white,
    },

    '&:hover': {
      backgroundColor: theme.palette.hover.main,
    },

  },
  
  '&.MuiButton-outlined': {
    color: theme.palette.dashboardText.primary,
    borderColor: theme.palette.lighert.main,
    
    '& .MuiButton-startIcon': {
      color: theme.palette.dashboardText.primary,
    },

    '& .MuiButton-endIcon': {
      color: theme.palette.dashboardText.primary,
    },

    '&:hover': {
      backgroundColor: theme.palette.lighert.main,
      color: theme.palette.dashboardText.white,
    },
   
  },
  
  '&.MuiButton-text': {
    color: theme.palette.dashboardText.primary,
    
    '& .MuiButton-startIcon': {
      color: theme.palette.dashboardText.primary,
    },

    '& .MuiButton-endIcon': {
      color: theme.palette.dashboardText.primary,
    },

    '&:hover': {
      backgroundColor: theme.palette.lighert.main,
      color: theme.palette.dashboardText.white,
    },

    '& .MuiButton-label': {
      fontSize: { xs: '10px', sm: '12px', md: '16px' },
      fontWeight: 500,
      color: 'text.primary',
      letterSpacing: 0,
    },
  },
}));

export const DashboardButton: React.FC<DashboardButtonProps> = ({
  variant = 'contained',
  children,
  startIcon,
  endIcon,
  ...props
}) => {
//   const iconMap = {
//     cancel: <CancelOutlined sx={{ color: 'primary.main' }} />,
//     emojiFlags: <EmojiFlags sx={{ color: 'dashboardText.white' }} />,
//   };

  return (
    <StyledButton
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
