import { Box } from "@mui/material";
import CustomTextDefault from "../../../../../components/CustomTextDefault";

type DadosDaFeatureProps = {
  identificador: string;
  descricao: string;
  porcentagem: number;
  criadoEm: string;
};

const DadosDaFeature = ({ identificador, descricao, porcentagem, criadoEm }: DadosDaFeatureProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: 2,
        padding: 2,
        boxShadow: 1,
        height: 298,
      
      }}
    >
      <CustomTextDefault size="subtitle1" sx={{ fontWeight: 600, mb: 3, color: "#616161" }}>
        Dados da feature
      </CustomTextDefault>

      <CustomTextDefault size="caption" sx={{ color: "#616161" }}>
        Identificador
      </CustomTextDefault>
      <CustomTextDefault size="body2" sx={{ mb: 2 }}>
        {identificador}
      </CustomTextDefault>

      <CustomTextDefault size="caption" sx={{ color: "#616161" }}>
        Descrição
      </CustomTextDefault>
      <CustomTextDefault size="body2" sx={{ mb: 2 }}>
        {descricao}
      </CustomTextDefault>

      <CustomTextDefault size="caption" sx={{ color: "#616161" }}>
        Rollout (%):
      </CustomTextDefault>
      <CustomTextDefault size="body2" sx={{ mb: 2 }}>
        {porcentagem}%
      </CustomTextDefault>

      <CustomTextDefault size="caption" sx={{ color: "#616161" }}>
        Criado em:
      </CustomTextDefault>
      <CustomTextDefault size="body2">{criadoEm}</CustomTextDefault>
    </Box>
  );
};

export default DadosDaFeature;
