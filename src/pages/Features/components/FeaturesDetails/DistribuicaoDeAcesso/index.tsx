import { Box, Paper, Stack } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import CustomTextDefault from "../../../../../components/CustomTextDefault";

const data = [
  { label: "Whitelist", value: 100, color: "#2E7D32" },
  { label: "Blacklist", value: 25, color: "#C62828" },
  { label: "Rollout", value: 325, color: "#1565C0" },
  { label: "Não Impactadas", value: 50, color: "#6A1B9A" },
];

const legenda = [
  { label: "Whitelist", color: "#2E7D32", descricao: "Unidades selecionadas com acesso." },
  { label: "Blacklist", color: "#C62828", descricao: "Unidades sem acesso à feature." },
  { label: "Rollout", color: "#1565C0", descricao: "Feature ativa por liberação gradual." },
  { label: "Não Impactadas", color: "#6A1B9A", descricao: "Unidades aguardando liberação." },
];

const DistribuicaoDeAcesso = () => {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <Paper elevation={1} sx={{ borderRadius: 2, p: 4 }}>
      <CustomTextDefault size="subtitle1" text="Distribuição de Acesso" sx={{ fontWeight: 600, mb: 2, color: "#616161" }} />

      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-between"
       
        
      >
        {/* Donut Chart sem rótulos */}
        <PieChart
          series={[
            {
              data,
              outerRadius: 80,
              innerRadius: 40,
              cornerRadius: 0,
            },
          ]}
          width={220}
          height={220}
          hideLegend={true}
        />

        {/* Legenda */}
        <Stack
          spacing={2}
          ml={{ sm: 4 }}
          mt={{ xs: 3, sm: 0 }}
          direction="row"
          justifyContent="space-between"
          width="100%"
        >
          {/* Coluna esquerda: Nome + descrição */}
          <Box display="flex" flexDirection="column" gap={2} flex={1}>
            {legenda.map((item) => (
              <Box key={item.label} display="flex" alignItems="flex-start">
                <Box
                  sx={{
                    width: 7,
                    height: 32,
                    backgroundColor: item.color,
                    mr: 1.5,
                    mt: 0.5,
                  }}
                />
                <Box>
                  <CustomTextDefault size="body2" sx={{ fontWeight: 600 }}>
                    {item.label}
                  </CustomTextDefault>
                  <CustomTextDefault size="caption" color="#888">
                    {item.descricao}
                  </CustomTextDefault>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Coluna direita: Percentual + unidades */}
          <Box display="flex" flexDirection="column" gap={2} alignItems="flex-end">
            {data.map((item) => {
              const percent = Math.round((item.value / total) * 100);
              return (
                <Box key={item.label} textAlign="right">
                  <CustomTextDefault size="body2" sx={{ fontWeight: 600 }} color={item.color}>
                    {percent}%
                  </CustomTextDefault>
                  <CustomTextDefault size="caption" color="#888">
                    {item.value} unidades
                  </CustomTextDefault>
                </Box>
              );
            })}
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
};

export default DistribuicaoDeAcesso;
