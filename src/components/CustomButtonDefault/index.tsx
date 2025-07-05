// src/components/CustomButtonDefault.tsx
import { Button } from "@mui/material";
import { ReactNode } from "react";

type CustomButtonDefaultProps = {
  text: string;
  color: string;
  onClick: () => void;
  startIcon?: ReactNode;
  textColor?: string;     
  borderColor?: string;   
};

const CustomButtonDefault = ({
  text,
  color,
  onClick,
  startIcon,
  textColor = "white",
  borderColor,
}: CustomButtonDefaultProps) => {
  return (
    <Button
      variant="contained"
      color={color as any}
      style={{
        fontSize: "12px",
        fontWeight: 700,
        backgroundColor: color,
        borderRadius: "8px",
        color: textColor,
        paddingLeft: "30px",
        paddingRight: "30px",
        border: borderColor ? `2px solid ${borderColor}` : "none",
      }}
      onClick={onClick}
      startIcon={startIcon}
    >
      {text}
    </Button>
  );
};

export default CustomButtonDefault;
