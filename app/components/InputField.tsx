import { TextField, styled } from '@mui/material';
import theme from '../theme';

interface InputFieldProps {
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  fullWidth?: boolean;
  type?: 'text' | 'email' | 'password';
  InputProps?: any;
  sx?: any;
}

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: 36,
    padding: '0 17px',
    height: 61,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    width: 396,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: 320,
      padding: '0 14px',
      height: 48,
    },
    '&.Mui-focused fieldset': {
      borderColor: 'primary.main',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '0 8px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 6px',
    },
  },
});

const InputField: React.FC<InputFieldProps> = ({
  label,
  defaultValue,
  placeholder,
  fullWidth = true,
  type = 'text',
  InputProps,
  sx,
  ...props
}) => {
  return (
    <StyledTextField
      fullWidth={fullWidth}
      variant="outlined"
      margin="normal"
      label={label}
      defaultValue={defaultValue}
      placeholder={placeholder}
      type={type}
      InputProps={InputProps}
      sx={sx}
      {...props}
    />
  );
};

export default InputField;
