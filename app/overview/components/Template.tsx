import React from "react";
import Sidebar from "./sidebar";
import Header from "./Header";
import { Box } from "@mui/material";

const Overview = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        overflowY: "auto",
        height: "100vh",
      }}
    >
      <Sidebar />
      <Box
        sx={{ display: "flex", flex: 1, flexDirection: "column", minWidth: 0 }}
      >
        <Header />
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            px: 3,
            py: 2,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
