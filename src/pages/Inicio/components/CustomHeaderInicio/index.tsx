import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import HelpIcon from "@mui/icons-material/Help";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Person as UserIcon } from "@mui/icons-material";
import SearchDropdown from "../../../../components/CustomSearchDropdown";
import HeaderLogo from "../HeaderLogo";
import CustomIconButtonHeaderInicio from "../CustomIconButtonHeaderInicio";
import AvatarHeaderInicio from "../AvatarHeaderInicio";

interface HeaderInicioProps {
  onSearchChange: (termo: string) => void;
  searchResults: any[];
  onSelectItem: (item: any) => void;
  renderItem: (item: any) => React.ReactNode;
  onToggleSidebar: () => void; 
}


const HeaderInicio: React.FC<HeaderInicioProps> = ({
  onSearchChange,
  searchResults,
  onSelectItem,
  renderItem,
  onToggleSidebar,
}) => { 

  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearchChange(value);
  };
  
  return (
    
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "#EF6C00", padding: "0px" }}>
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      {/* Box 1: Menu e Logo */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton color="inherit" aria-label="menu" sx={{ mr: 3 }} onClick={onToggleSidebar}>
  <MenuIcon />
</IconButton>
        <HeaderLogo />
      </Box>

      {/* Box 2: Barra de pesquisa */}
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", height: "40px" }}>
        <Box sx={{ position: "relative", width: "500px" }}>
          <FormControl fullWidth sx={{ color: "white" }}>
          <OutlinedInput
            sx={{
              color: "white",
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
              backgroundColor: "hsla(0,0%,100%,.1)",
              padding: "0 10px",
              height: "40px",
              "&::placeholder": {
                color: "white", 
                opacity: 1, 
              },
              "& .MuiInputBase-input::placeholder": {
                color: "white",
                opacity: 1,
              }
            }}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Pesquisar clientes e leads"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            }
          />
          </FormControl>

          {/* Dropdown de sugestões */}
          {searchResults.length > 0 && (
            <SearchDropdown
              items={searchResults}
              onSelect={onSelectItem}
              renderItem={renderItem}
            />
          )}
        </Box>
      </Box>

      {/* Box 3: Botões do cabeçalho */}
      <Box sx={{ display: "flex", gap: 1, ml: "auto", alignItems: "center" }}>
        <CustomIconButtonHeaderInicio color="inherit" icon={<CardGiftcardIcon />} />
        <CustomIconButtonHeaderInicio color="inherit" icon={<PhonelinkLockIcon />} />
        <CustomIconButtonHeaderInicio color="inherit" icon={<HelpIcon />} />
        <CustomIconButtonHeaderInicio color="inherit" icon={<ChatIcon />} />
        <CustomIconButtonHeaderInicio color="inherit" icon={<NotificationsIcon />} />
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            height: "30px",
            my: "auto",
          }}
        />
        <AvatarHeaderInicio
          userIcon={<UserIcon />}
          nomeUsuario="Vinicius Moraes"
          nomeUnidade="Academia NextFit"
        />
      </Box>
    </Toolbar>
  </AppBar>
  
    
  );
};

export default HeaderInicio;
