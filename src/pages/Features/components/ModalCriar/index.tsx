// src/components/ModalCriarRecurso.tsx
import { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Stack,
  Typography,
  Card,
  CardContent,
  Slider,
  IconButton,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { criarRecurso } from "../../../../services/FeatureFlagRecursos";
import AddIcon from "@mui/icons-material/Add";
import CustomButtonDefault from "../../../../components/CustomButtonDefault";
import { useSnackbar } from 'notistack';


type ModalCriarRecursoProps = {
  open: boolean;
  onClose: () => void;
  onSave?: () => void;
};

const ModalCriarRecurso = ({
  open,
  onClose,
  onSave,
}: ModalCriarRecursoProps) => {
  const [identificador, setIdentificador] = useState("");
  const [descricao, setDescricao] = useState("");
  const [porcentagem, setPorcentagem] = useState(0);

  const handleCriar = async () => {
    const payload = {
      identificador,
      descricao,
      porcentagem,
    };

    try {
      await criarRecurso(payload);
      setIdentificador("");
      setDescricao("");
      setPorcentagem(0);
      onSave?.();
      onClose();
    } catch (error) {
      console.error("Erro ao criar recurso:", error);
    }
  };

  const marks = [
    { value: 0, label: "0%" },
    { value: 25, label: "25%" },
    { value: 50, label: "50%" },
    { value: 75, label: "75%" },
    { value: 100, label: "100%" },
  ];

  const valuetext = (value: number) => `${value}%`;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute" as const,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "#EEEEEE",
          boxShadow: 24,
          borderRadius: "12px",
          p: 4,
          width: 800,
          height: 500,
        }}
      >
        {/* Header com ícone + texto */}
        <Stack direction="row" alignItems="center" spacing={1} mb={3}>
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
            <AddIcon color="warning" fontSize="large"/>
          </Box>

          <Typography sx={{ fontWeight: "700", color: "#616161" }} variant="h5">
            Nova Feature
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

        {/* Card: Dados principais */}
        <Card variant="outlined" sx={{ mb: 3, borderRadius: 2, pl: 2, pr: 2 }}>
          <CardContent>
            <Typography
              sx={{ color: "#616161" }}
              variant="subtitle1"
              fontWeight="bold"
              gutterBottom
            >
              Dados principais
            </Typography>
            <Stack spacing={2}>
              <TextField
                sx={{ color: "#616161" }}
                label="Identificador*"
                variant="standard"
                value={identificador}
                onChange={(e) => setIdentificador(e.target.value)}
                fullWidth
              />
              <TextField
                label="Descrição*"
                variant="standard"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                fullWidth
              />
            </Stack>
          </CardContent>
        </Card>

        {/* Card: Rollout */}
        <Card variant="outlined" sx={{ mb: 3, borderRadius: 2, pl: 2, pr: 2  }}>
          <CardContent>
            <Typography
              sx={{ color: "#616161" }}
              variant="subtitle1"
              fontWeight="bold"
              gutterBottom
            >
              Rollout
            </Typography>
            <Typography
              sx={{ color: "#616161" }}
              variant="body2"
              gutterBottom
            >
              Defina qual percentual da base de unidades receberá esta feature:
            </Typography>
            <Slider
              sx={{
              
                "& .MuiSlider-track": {
                  backgroundColor: "#EF6C00",
                },
                "& .MuiSlider-thumb": {
                  backgroundColor: "#EF6C00",
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "#E0E0E0", height: 15
                },
                "& .MuiSlider-mark": {
                  backgroundColor: "#E0E0E0",
                },
              }}
              aria-label="Custom marks"
              defaultValue={20}
              getAriaValueText={valuetext}
              step={5}
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e, value) => setPorcentagem(value as number)}
            />
          </CardContent>
        </Card>

        {/* Botões */}
        <Box display="flex" justifyContent="flex-end" gap={2} >
        <CustomButtonDefault color="#EEEEEE" textColor="#EF6C00" text="Fechar" onClick={onClose} />
        <CustomButtonDefault color="#EF6C00" text="Salvar" onClick={handleCriar} />
          
          
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalCriarRecurso;
