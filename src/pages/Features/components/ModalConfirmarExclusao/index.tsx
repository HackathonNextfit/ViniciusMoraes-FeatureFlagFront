import { Modal, Box, Typography, Button, Stack } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
import IconExcalamacaoVermelho from "../../../../assets/IconExcalamacaoVermelho.png"
import CustomButtonNoBorder from "../../../../components/CustomButtonNoBorder";
import CustomButtonDefault from "../../../../components/CustomButtonDefault";

type ModalConfirmarExclusaoProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  nomeRecurso?: string;
};

const ModalConfirmarExclusao = ({
  open,
  onClose,
  onConfirm,
  nomeRecurso,
}: ModalConfirmarExclusaoProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 400,
          bgcolor: "#fff",
          borderRadius: 2,
          p: 3,
          mx: "auto",
          mt: "20vh",
          boxShadow: 24,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {/* Cabeçalho com ícone */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <img src={IconExcalamacaoVermelho} alt="Icone de exclamação vermelho" />
          <Typography variant="h6" fontWeight={600} color="#616161">
            Remover feature
          </Typography>
        </Stack>

        {/* Texto com feature a remover */}
        <Typography variant="body1" color="text.secondary">
          Deseja remover a feature{" "}
          <strong>{nomeRecurso ?? "este recurso"}</strong>?
        </Typography>

        {/* Botões */}
        <Stack direction="row" spacing={2} justifyContent="flex-end">
        <CustomButtonDefault color="white" textColor="#D32F2F" text="Cancelar" onClick={onClose} />         
        <CustomButtonDefault color="#D32F2F" textColor="white" text="Remover" onClick={onConfirm} />
        </Stack>
      </Box>
    </Modal>
  );
};

export default ModalConfirmarExclusao;
