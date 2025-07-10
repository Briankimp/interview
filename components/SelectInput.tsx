import { TextField, MenuItem, styled } from "@mui/material";
import theme from "../app/theme";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

interface SelectInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  displayEmpty?: boolean;
  emptyLabel?: string;
  sx?: any;
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 36,
    padding: "6px 17px",
    height: {md:61, xs:40},
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: {md:10, xs:6},
    width: "100%",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      maxWidth: 50,
      padding: "6px 14px",
      height: {md:61, xs:40},
      boxSizing: "border-box",
    },
    "&.Mui-focused fieldset": {
     borderColor: "border.main",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "6px 8px",
    [theme.breakpoints.down("sm")]: {
      padding: "6px 6px",
    },
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: theme.palette.text.secondary,
    
  },
}));

const SelectInput: React.FC<SelectInputProps> = ({
  placeholder,
  value,
  onChange,
  options,
  displayEmpty = true,
  emptyLabel = ""
}) => {
  return (
    <StyledTextField
      fullWidth
      select
      value={value}
      onChange={(event: { target: { value: string } }) =>
        onChange(event.target.value)
      }
      SelectProps={{
        IconComponent: KeyboardArrowDownOutlinedIcon,
        displayEmpty: true,
        renderValue: (selected: string) =>
          selected && selected !== "" ? (
            selected
          ) : (
            <span style={{ color: theme.palette.text.secondary, opacity: 0.5 }}>
              {emptyLabel}
            </span>
          ),
      }}
      placeholder={placeholder}
    >
      {displayEmpty && (
        <MenuItem value="" disabled sx={{
          color: (theme) => theme.palette.text.secondary,

        }}>
         {emptyLabel}
        </MenuItem>
      )}
      {options.map((option) => (
        <MenuItem key={option} value={option} sx={{
          color: (theme) => theme.palette.text.secondary,
        }}>
          {option}
        </MenuItem>
      ))}
    </StyledTextField>
  );
};

export default SelectInput;
