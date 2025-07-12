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
      style={{
        fontSize: 16,
        fontWeight: 700,
        backgroundColor: color,
        borderRadius: "8px",
        color: textColor,
        paddingLeft: "20px",
        paddingRight: "20px",
        border: borderColor ? `2px solid ${borderColor}` : "none",
        height: 45,
        boxShadow: "none",
        transition: 'background-color 0.2s ease',
      }}
      sx={{
        '&:hover': {
          backgroundColor: color, 
          opacity: 0.8, 
          boxShadow: "none",
        }
      }}
      onClick={onClick}
      startIcon={startIcon}
    >
      {text}
    </Button>
  );
};

export default CustomButtonDefault;