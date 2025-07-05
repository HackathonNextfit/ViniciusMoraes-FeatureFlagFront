import { Input, InputAdornment, SxProps, Theme } from "@mui/material";

type CustomInputWithIconProps = {
  placeholder: string;
  icon: React.ReactNode; 
  value?: string;
  onChange?: (value: string) => void;
  sx?: SxProps<Theme>;
};

const CustomInputWithIcon = ({
  placeholder,
  icon,
  value = "",
  onChange,
  sx,
}: CustomInputWithIconProps) => {
  return (
    <Input
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      endAdornment={<InputAdornment position="end">{icon}</InputAdornment>}
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        maxWidth: 400,
        ...sx,
      }}
      fullWidth
    />
  );
};

export default CustomInputWithIcon;
