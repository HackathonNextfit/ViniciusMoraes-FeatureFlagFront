import { Box, Button } from "@mui/material";
import DadosDaFeature from "./DadosDaFeature";
import DistribuicaoDeAcesso from "./DistribuicaoDeAcesso";
import CustomTextDefault from "../../../../components/CustomTextDefault";
import TabelaUnidadesCadastradas from "./TabelaUnidadesCadastradas";

type FeaturesDetailsProps = {
  onVoltar: () => void;
};

const FeaturesDetails = ({ onVoltar }: FeaturesDetailsProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%", height: "100%"}}> 

      <Button onClick={onVoltar}>Voltar</Button>
      <CustomTextDefault text="Detalhes da Feature" size="h3" sx={{ mr: 4, fontWeight: 600, color: "#616161" }} />
    <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
      

      <DadosDaFeature
        identificador="avaliacao_fisica"
        descricao="Módulo de avaliação física"
        porcentagem={55}
        criadoEm="03/07/2025" // não consegui dar um get na data de criação, isso me gerou vários erros e deixei em mock (não encontrei esse dado no postman)
      />

      <DistribuicaoDeAcesso />
      
    </Box>
    <TabelaUnidadesCadastradas />
    </Box>
  );
};

export default FeaturesDetails;
