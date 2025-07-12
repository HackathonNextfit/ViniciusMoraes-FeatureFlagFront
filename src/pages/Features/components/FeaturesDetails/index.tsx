import { Box, Button } from "@mui/material";

type FeaturesDetailsProps = {
  onVoltar: () => void;
};

const FeaturesDetails = ({ onVoltar }: FeaturesDetailsProps) => {
  return (
    <Box>
      <Button onClick={onVoltar}>Voltar</Button>
      {/* Conteúdo da tela de detalhes */}
    </Box>
  );
};

export default FeaturesDetails;
