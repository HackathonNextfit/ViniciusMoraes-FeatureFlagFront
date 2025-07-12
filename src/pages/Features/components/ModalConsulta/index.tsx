import { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import CustomButtonDefault from "../../../../components/CustomButtonDefault";
import IconConsultaLaranja from "../../../../assets/iconConsultaLaranja.png";
import { GridSearchIcon } from "@mui/x-data-grid";

type ModalConsultaProps = {
  open: boolean;
  onClose: () => void;
};

const ModalConsulta = ({
  open,
  onClose,
}: ModalConsultaProps) => {
  const [featureIdentificador, setFeatureIdentificador] = useState("");
  const [unidadeIdentificador, setUnidadeIdentificador] = useState("");

  const handleConsultar = () => {
    console.log("Consulta:");
    console.log("Feature:", featureIdentificador);
    console.log("Unidade:", unidadeIdentificador);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute" as const,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "#FFFFFF",
          boxShadow: 24,
          borderRadius: "12px",
          p: 4,
          width: 800,
        }}
      >
        {/* Header com ícone + texto */}
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <Box
            sx={{
              bgcolor: "#FFF3E0",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 48,
              height: 48,
            }}
          >
            <img src={IconConsultaLaranja} alt="Consulta" />
          </Box>

          <Typography sx={{ fontWeight: "700", color: "#616161" }} variant="h6">
            Consulta
          </Typography>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              onClick={onClose}
              sx={{
                color: "#616161",
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>

        {/* Texto de instrução */}
        <Typography
          sx={{ mb: 3, color: "#616161" }}
          variant="body1"
        >
          Verifique se uma funcionalidade está ativa para uma unidade específica, informando o identificador da feature e o da unidade para consultar o status.
        </Typography>

        {/* Inputs + botão na mesma linha */}
        <Stack direction="row" spacing={2} mb={4}>
        <TextField
            variant="standard"
            label="Feature"
            value={featureIdentificador}
            onChange={(e) => setFeatureIdentificador(e.target.value)}
            sx={{
                flex: 1,
                '& .MuiInput-underline:before': {
                borderBottomColor: '#BDBDBD', 
                },
                '& .MuiInput-underline:hover:before': {
                borderBottomColor: '#BDBDBD', 
                },
                '& .MuiInput-underline:after': {
                borderBottomColor: '#BDBDBD', 
                },
                '& label.Mui-focused': {
                color: '#616161', 
                },
            }}
            />
          <TextField
            variant="standard"
            label="Unidade"
            value={unidadeIdentificador}
            onChange={(e) => setUnidadeIdentificador(e.target.value)}
            sx={{
                flex: 1,
                '& .MuiInput-underline:before': {
                  borderBottomColor: '#BDBDBD', 
                },
                '& .MuiInput-underline:hover:before': {
                  borderBottomColor: '#BDBDBD', 
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#BDBDBD',
                },
                '& label.Mui-focused': {
                  color: '#616161', 
                },
              }}
          />
          <CustomButtonDefault
            color="white"
            textColor="#EF6C00"
            text="Consultar"
            borderColor="#EF6C00"
            startIcon={<GridSearchIcon />}
            onClick={handleConsultar}
          />
        </Stack>

        {/* Botão Fechar */}
        <Box display="flex" justifyContent="flex-end">
          <CustomButtonDefault
            color="#EF6C00"
            textColor="White"
            text="Fechar"
            onClick={onClose}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalConsulta;
