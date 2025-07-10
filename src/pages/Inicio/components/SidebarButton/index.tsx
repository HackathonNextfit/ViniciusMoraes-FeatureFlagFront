import { Button } from "@mui/material";
import { ReactNode } from "react";

type SidebarButtonProps = {
  icon: ReactNode;
  text: string;
  onClick: () => void;
};

const SidebarButton = ({ icon, text, onClick }: SidebarButtonProps) => (
  <Button
    onClick={onClick}
    startIcon={icon}
    disableElevation
    sx={{
      backgroundColor: "transparent",
      color: "inherit",
      textTransform: "none",
      justifyContent: "flex-start",
      width: "100%",
      padding: "12px 16px",
      borderRadius: 0,
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.04)"
      }
    }}
  >
    {text}
  </Button>
);

export default SidebarButton;
