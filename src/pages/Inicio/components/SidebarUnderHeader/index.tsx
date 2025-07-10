// src/components/SidebarUnderHeader.tsx
import React from "react";
import { Box, Slide } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import InfoIcon from "@mui/icons-material/Info";
import SidebarButton from "../SidebarButton";

type SidebarUnderHeaderProps = {
  open: boolean;
  onClose: () => void;
  headerHeight?: number; // Altura do AppBar (default 64px)
};

const SidebarUnderHeader: React.FC<SidebarUnderHeaderProps> = ({
  open,
  onClose,
  headerHeight = 64,
}) => {
  return (
    <Slide direction="right" in={open} mountOnEnter unmountOnExit>
      <Box
        sx={{
          position: "fixed",
          top: `${headerHeight}px`,
          left: 0,
          width: 240,
          height: `calc(100% - ${headerHeight}px)`,
          bgcolor: "background.paper",
          boxShadow: 3,
          zIndex: 1200,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SidebarButton
          icon={<InboxIcon />}
          text="Inbox"
          onClick={onClose}
        />
        <SidebarButton
          icon={<MailIcon />}
          text="Mail"
          onClick={onClose}
        />
        <SidebarButton
          icon={<InfoIcon />}
          text="About"
          onClick={onClose}
        />
      </Box>
    </Slide>
  );
};

export default SidebarUnderHeader;
