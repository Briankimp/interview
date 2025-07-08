import { Button, Typography, Box, styled } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import Link from "next/link";
import theme from "../app/theme";

interface ContinueButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
}

const StyledButton = styled(Button)<{
  variant?: "contained" | "outlined" | "text";
}>({
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
});
const ContinueButton: React.FC<ContinueButtonProps> = ({
  href,
  children,
  variant,
}) => {
  return (
    <Link href={href} passHref>
      <Box component="a" style={{ textDecoration: "none" }}>
        <StyledButton
          fullWidth
          variant={variant}
          endIcon={<ArrowForward sx={{ fontSize: 24 }} />}
          color="primary"
          sx={{
            paddingTop: 2,
            paddingBottom: 2,
            paddingRight: { xs: 12, md: 14 },
            paddingLeft: { xs: 12, md: 14 },
            borderRadius: 46,
            gap: { xs: 2, md: 2.5 },
            height: { xs: 56, md: 64 },
            "& .MuiButton-endIcon": {
              fontSize: { xs: 20, md: 24 },
              boxSizing: "border-box",
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "text.main",
              display: "inline-block",
              textAlign: "center",
              fontWeight: 500,
              fontSize: { sm: 16, md: 18 },
            }}
          >
            {children}
          </Typography>
        </StyledButton>
      </Box>
    </Link>
  );
};

export default ContinueButton;
