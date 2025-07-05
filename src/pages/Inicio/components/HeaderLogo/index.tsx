// HeaderLogo.tsx
import React from "react";
import { Box } from "@mui/material";
import logo from "../../../../assets/nextfit-academia-logo.svg";

const HeaderLogo: React.FC = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <img
        src={logo}
        alt="Logo"
        style={{ width: 110, height: 50, objectFit: "contain" }}
      />
    </Box>
  );
};

export default HeaderLogo;
