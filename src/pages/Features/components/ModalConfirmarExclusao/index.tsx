import { Modal, Box, Typography, Button, Stack } from "@mui/material";

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
          bgcolor: "background.paper",
          p: 4,
          mx: "auto",
          mt: "20vh",
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
      
          Confirmar exclusão de {nomeRecurso}
        </Typography>         
        
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button onClick={onClose}>Cancelar</Button>
          <Button variant="contained" color="error" onClick={onConfirm}>
            Apagar
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ModalConfirmarExclusao;
