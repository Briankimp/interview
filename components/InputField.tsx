import { TextField, styled } from "@mui/material";

interface InputFieldProps {
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  fullWidth?: boolean;
  type?: "text" | "email" | "password";
  InputProps?: any;
  sx?: any;
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 36,
    padding: "6px 17px",
    height: {md:61, xs:15},
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    //gap: {md:10, xs:6},
    width: "100%",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      maxWidth: 200,
      padding: "6px 14px",
      height: 15,
      boxSizing: "border-box",
    },
    "&.Mui-focused fieldset": {
      borderColor: "border.main",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "6px 8px",
    [theme.breakpoints.down("xs")]: {
      padding: "6px 6px",
    },
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: theme.palette.text.secondary,
  },
}));

const InputField: React.FC<InputFieldProps> = ({
  label,
  defaultValue,
  placeholder,
  fullWidth = true,
  type = "text",
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
