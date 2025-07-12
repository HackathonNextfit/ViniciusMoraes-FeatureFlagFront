import {
    Paper,
    Typography,
    Stack,
    ClickAwayListener,
    Box, 
  } from "@mui/material";
  
  import iconVisualizarDetalhes from "../../../../assets/iconVisualizarDeatlhes.png";
  import iconEditar from "../../../../assets/iconEditar.png";
  import iconRemover from "../../../../assets/iconRemover.png";
import { useEffect, useState } from "react";
  
  type ModalOpcoesLateralProps = {
    open: boolean;
    anchorEl: HTMLElement | null;
    onClose: () => void;
    onEditar: () => void;
    onRemover: () => void;
  };
  
  const ModalOpcoesLateral = ({
    open,
    anchorEl,
    onClose,
    onEditar,
    onRemover,
  }: ModalOpcoesLateralProps) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
  
    useEffect(() => {
      if (!open || !anchorEl) return;
  
      const updatePosition = () => {
        const rect = anchorEl.getBoundingClientRect();
        setPosition({
          top: rect.bottom + window.scrollY + 8,
          left: rect.left + window.scrollX,
        });
      };
  
      updatePosition();
  
      window.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);
  
      return () => {
        window.removeEventListener("scroll", updatePosition);
        window.removeEventListener("resize", updatePosition);
      };
    }, [open, anchorEl]);
  
    if (!open || !anchorEl) return null;
  
    const rect = anchorEl.getBoundingClientRect();
  
    return (
      <ClickAwayListener onClickAway={onClose}>
        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            top: rect.bottom + 8,
            left: rect.left,
            zIndex: 1500,
            width: 100,
            height: 100,
            borderRadius: 2,
            py: 1,
            px: 1,
          }}
        >
          <Stack spacing={2.5}>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ cursor: "pointer", px: 1, }}
              onClick={onClose}
            >
              <Box sx={{ width: 24, display: "flex", justifyContent: "center" }}>
                <Box component="img" src={iconVisualizarDetalhes} alt="Detalhes" width={20} height={20} />
              </Box>
              <Typography variant="body2" ml={1}>
                Detalhes
              </Typography>
            </Stack>
  
            <Stack
              direction="row"
              alignItems="center"
              sx={{ cursor: "pointer", px: 1 }}
              onClick={onEditar}
            >
              <Box sx={{ width: 24, display: "flex", justifyContent: "center" }}>
                <Box component="img" src={iconEditar} alt="Editar" width={18} height={18} />
              </Box>
              <Typography variant="body2" ml={1}>
                Editar
              </Typography>
            </Stack>
  
            <Stack
              direction="row"
              alignItems="center"
              sx={{ cursor: "pointer", px: 1 }}
              onClick={onRemover}
            >
              <Box sx={{ width: 24, display: "flex", justifyContent: "center" }}>
                <Box component="img" src={iconRemover} alt="Remover" width={17} height={18} />
              </Box>
              <Typography variant="body2" ml={1} color="error">
                Remover
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </ClickAwayListener>
    );
  };
  
  export default ModalOpcoesLateral;
  