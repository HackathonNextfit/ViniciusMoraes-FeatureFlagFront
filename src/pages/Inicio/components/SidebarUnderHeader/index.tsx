import React, { useState } from "react";
import { Box, Slide } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupsIcon from '@mui/icons-material/Groups';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SidebarButton from "../SidebarButton";
import DashboardIcon from "../../../../assets/dashboardIcon.png";

type SidebarUnderHeaderProps = {
  open: boolean;
  onClose: () => void;
  headerHeight?: number; 
};

const SidebarUnderHeader: React.FC<SidebarUnderHeaderProps> = ({
  open,
  onClose,
  headerHeight = 64,
}) => {
  const [selected, setSelected] = useState("Dashboard");

  const handleSelect = (label: string) => {
    setSelected(label);
    onClose(); // ou remova se não quiser fechar ao clicar
  };

  return (
    <Slide direction="right" in={open} mountOnEnter unmountOnExit>
      <Box
        sx={{
          position: "fixed",
          top: `${headerHeight}px`,
          left: 0,
          width: 240,
          height: `calc(100% - ${headerHeight}px)`,
          bgcolor: "#EEEEEE",
          
          zIndex: 1200,
          display: "flex",
          flexDirection: "column",
        
        }}
      >
        <SidebarButton 
          icon={<img src={DashboardIcon} />} 
          text="Dashboard"
          onClick={() => handleSelect("Dashboard")}
          selected={selected === "Dashboard"}
          highlightColor="#9C27B0"
        />
        <SidebarButton
          icon={<AssignmentIcon sx={{ color: "#EF6C00" }} />}
          text="Features"
          onClick={() => handleSelect("Features")}
          selected={selected === "Features"}
          highlightColor="#EF6C00"
        />
        <SidebarButton
          icon={<GroupsIcon sx={{ color: "#0277BD" }} />}
          text="Unidades"
          onClick={() => handleSelect("Unidades")}
          selected={selected === "Unidades"}
          highlightColor="#0277BD"
        />
      </Box>
    </Slide>
  );
};

export default SidebarUnderHeader;
