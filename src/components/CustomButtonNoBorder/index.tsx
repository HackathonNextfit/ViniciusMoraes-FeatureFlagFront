import { Button } from "@mui/material";
import { ReactNode } from "react";

type CustomButtonNoBorderProps = {
  text: string;
  onClick: () => void;
  textColor?: string;
  startIcon?: ReactNode;
};

const CustomButtonNoBorder = ({
  text,
  onClick,
  textColor = "#000", 
  startIcon,
}: CustomButtonNoBorderProps) => {
  return (
    <Button
      onClick={onClick}
      startIcon={startIcon}
      disableElevation
      sx={{
        backgroundColor: "transparent",
        color: textColor,
        boxShadow: "none",
        border: "none",
        padding: 0,
        minWidth: "auto",
        fontWeight: 500,
        fontSize: "14px",
        textTransform: "none",
        '&:hover': {
          backgroundColor: "transparent",
          
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButtonNoBorder;
