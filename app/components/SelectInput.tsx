import { TextField, MenuItem, styled } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import theme from '../theme';

interface SelectInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  displayEmpty?: boolean;
  emptyLabel?: string;
  sx?: any;
}

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: 36,
    padding: '0 17px',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    width: "100%",
    boxSizing: "border-box",
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: 200,
      padding: '0 14px',
      height: 40,
      boxSizing: "border-box",
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

const SelectInput: React.FC<SelectInputProps> = ({
  placeholder,
  value,
  onChange,
  options,
  displayEmpty = true,
  emptyLabel = 'Select an option',
  sx,
}) => {
  return (
    <StyledTextField
    fullWidth
      select
      value={value}
      onChange={(event: { target: { value: string; }; }) => onChange(event.target.value)}
      SelectProps={{
        IconComponent: ArrowDropDown,
        displayEmpty: true,
      }}
      placeholder={placeholder}
      sx={sx}
    >
      {displayEmpty && (
        <MenuItem value="" disabled>
          {emptyLabel}
        </MenuItem>
      )}
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </StyledTextField>
  );
};

export default SelectInput;
