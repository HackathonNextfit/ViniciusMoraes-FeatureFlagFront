import { Stack } from "@mui/material";
import TelaDivisaoEsquerda from "./components/TelaDivisaoEsquerda";
import TelaDivisaoDireita from "./components/TelaDivisaoDireita";

const Login = () => {
    return (
        <Stack direction="row" sx={{ height: '100%' }}>
        <TelaDivisaoEsquerda />
        <TelaDivisaoDireita />
      </Stack>
      
    );  
};

export default Login;