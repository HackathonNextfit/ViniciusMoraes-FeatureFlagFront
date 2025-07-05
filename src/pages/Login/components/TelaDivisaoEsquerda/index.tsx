import { Box, Stack } from "@mui/material";
import CustomTextDefault from "../../../../components/CustomTextDefault";
import LogoLogin from "../../../../assets/LogoLogin.svg";

const TelaDivisaoEsquerda = () => {
  return (
    <Box
      sx={{
        flex: 1.1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        boxSizing: "border-box",
      
      }}
    >
      {/* Box interna com padding controlado */}
      <Box sx={{ px: { xs: 2, sm: 4, md: 8, lg: 20, xl: 34 }, height: "100%" }}>
        {/* Logo Next Fit */}
        <Box sx={{ mb: 8 }}>
          <img
            src={LogoLogin}
            alt="Logo Next Fit"
            style={{
              width: 190,
              height: "auto",
              marginBottom: 200,
              marginTop: 80,
             
            }}
          />
        </Box>
  
        {/* Textos de boas-vindas */}
        <Stack spacing={3} sx={{ textAlign: "left" }}>
          <CustomTextDefault
            size="h3"
            color="#8323A0"
            fontWeight={700}
            text="Que bom ter você por aqui! 👋"
          />
  
          <CustomTextDefault
            size="body2"
            color="#616161"
            sx={{ 
              "& span": {
                fontWeight: 700,
              },
            }}
          >
            Acesse sua conta <span>Next Fit</span>, inserindo seu e-mail abaixo:
          </CustomTextDefault>
        </Stack>
      </Box>
    </Box>
  );
};

export default TelaDivisaoEsquerda;