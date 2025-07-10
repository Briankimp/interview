import { Box, Button, Typography, styled } from "@mui/material";
import {
  CheckCircleOutlineRounded,
  AddRounded,
  CancelOutlined,
} from "@mui/icons-material";
import theme from "../app/theme";

interface ActionButtonProps {
  text: string;
  status?: "success" | "error" | "action";
  icon?: React.ReactNode;
  width?: number;
  height?: number;
  onClick?: () => void;
  sx?: any;
}

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "status" && prop !== "width",
})<{ status?: "success" | "error" | "action"; width?: number }>(
  ({ theme, status, width }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: 2,
    px: 3,
    borderRadius: 20,
    height: 38,
    width: width ?? (status === "success" ? 149 : 118),
    backgroundColor:
      status === "success"
        ? theme.palette.success.main
        : status === "error"
        ? theme.palette.error.main
        : theme.palette.primary.main,
    "&:hover": {
      backgroundColor:
        status === "success"
          ? theme.palette.success.dark
          : status === "error"
          ? theme.palette.error.dark
          : theme.palette.primary.dark,
    },
    "&:disabled": {
      opacity: 0.7,
      cursor: "not-allowed",
    },
  })
);

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  status = "action",
  icon = status === "success" ? (
    <CheckCircleOutlineRounded />
  ) : status === "error" ? (
    <CancelOutlined  />
  ) : (
    <AddRounded />
  ),
  width = status === "success" ? {md:149, xs:90} : {md:118, xs:90},
  height = status === "success" ? {md:38, xs:30, sm:35} : {md:38, xs:30, sm:35},
  onClick,
  sx,
}) => {
  return (
    <StyledButton
      variant="contained"
      //startIcon={icon}
      status={status}
      width={width}
      height={height}
      onClick={onClick}
      sx={sx}
    >
      {/* <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 , height: 5 , width: 5}}>
        {icon}
      </Box> */}
      <Typography variant="h5" color="white" sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
        {icon}
      </Typography>
      <Typography variant="h5" color="white">
        {text}
      </Typography>
    </StyledButton>
  );
};

export default ActionButton;
