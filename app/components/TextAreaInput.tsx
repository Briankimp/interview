import { TextField, styled } from '@mui/material';
import theme from '../theme';

interface TextAreaInputProps {
  placeholder: string;
  rows?: number;
  sx?: any;
}

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: 16,
    height: 115,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1.25,
    width: "100%",
    boxSizing: "border-box",

    [theme.breakpoints.down('sm')]: {
      width: '100%',

      height: 100,
      boxSizing: "border-box",
    },

    '&.Mui-focused fieldset': {
      borderColor: 'primary.main',
    },
  },
  '& .MuiOutlinedInput-input': {
   
    boxSizing: "border-box",
    [theme.breakpoints.down('xs')]: {
      padding: '0 6px',
    width: "100%",
      boxSizing: "border-box",
    },
  },
});

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  placeholder,
  rows = 4,
  sx,
}) => {
  return (
    <StyledTextField
    fullWidth
      multiline
      rows={rows}
      placeholder={placeholder}
      variant="outlined"
      margin="normal"
      sx={sx}
    />
  );
};

export default TextAreaInput;
