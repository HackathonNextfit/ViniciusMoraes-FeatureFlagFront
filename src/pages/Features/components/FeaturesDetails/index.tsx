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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        height: "100%",
      }}
    >
      {/* Topo com subtítulo e botão de voltar */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <CustomTextDefault
          text="Detalhes da feature"
          size="h5"
          sx={{ fontWeight: 600, color: "#616161" }}
        />
        <Button onClick={onVoltar} variant="contained" sx={{ height: 36 }}>
          Voltar
        </Button>
      </Box>

      {/* Duas Box com DadosDaFeature e DistribuicaoDeAcesso */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: 0,
          
        }}
      >
        <Box
          sx={{
            flex: 1,
            minWidth: "350px",
            pr: 1,
          }}
        >
          <DadosDaFeature
            identificador="avaliacao_fisica"
            descricao="Módulo de avaliação física"
            porcentagem={55}
            criadoEm="03/07/2025"
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            minWidth: "350px",
            pl: 1, 
          }}
        >
          <DistribuicaoDeAcesso />
        </Box>
      </Box>

      {/* Tabela com unidades cadastradas */}
      <TabelaUnidadesCadastradas />
    </Box>
  );
};

export default FeaturesDetails;
