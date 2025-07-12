import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

const TabelaUnidadesCadastradas = () => {
  const unidadesMockadas = [
    { id: 1, identificador: "Unidade_13062", descricao: "Ritmo Urbano Academia", tipoAcesso: "Whitelist" },
    { id: 2, identificador: "Unidade_12556", descricao: "Fit Core", tipoAcesso: "Blacklist" },
    { id: 3, identificador: "Unidade_05984", descricao: "Evolve Fitness", tipoAcesso: "Rollout" },
    { id: 4, identificador: "Unidade_06589", descricao: "Vitality Studio", tipoAcesso: "Não Impactadas" },
    { id: 5, identificador: "Unidade_45874", descricao: "Mente Sã Academia", tipoAcesso: "Whitelist" },
    { id: 6, identificador: "Unidade_56584", descricao: "Essência do Corpo", tipoAcesso: "Whitelist" },
    { id: 7, identificador: "Unidade_55443", descricao: "Harmonia Corporal", tipoAcesso: "Rollout" },
    { id: 8, identificador: "Unidade_74589", descricao: "Bem-Estar em Movimento", tipoAcesso: "Não Impactadas" },
  ];

  const columns: GridColDef[] = [
    {
      field: "identificador",
      headerName: "Identificador",
      flex: 1,
      headerAlign: "left",
    },
    {
      field: "descricao",
      headerName: "Descrição",
      flex: 1,
      headerAlign: "left",
    },
    {
      field: "tipoAcesso",
      headerName: "Tipo de acesso",
      flex: 1,
      headerAlign: "left",
      renderCell: (params) => {
        let bgColor = "";
        let textColor = "";
        switch (params.value) {
          case "Whitelist":
            bgColor = "#E0F2F1";
            textColor = "#2E7D32";
            break;
          case "Blacklist":
            bgColor = "#FFEBEE";
            textColor = "#C62828";
            break;
          case "Rollout":
            bgColor = "#E3F2FD";
            textColor = "#1565C0";
            break;
          case "Não Impactadas":
            bgColor = "#EDE7F6";
            textColor = "#6A1B9A";
            break;
          default:
            bgColor = "#EEEEEE";
            textColor = "#424242";
        }
        return (
          <Box
            sx={{
              backgroundColor: bgColor,
              borderRadius: "12px",
              px: 1.5,
              py: 0.5,
              display: "inline-block",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 500,
                color: textColor,
              }}
            >
              {params.value}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: "100%", width: "100%", mt: 2 }}>
      <Paper elevation={0} sx={{ p: 2, borderRadius: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 2,
            mb: 2,
          }}
        >
          {/* Título */}
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, color: "#616161" }}
          >
            Unidades cadastradas
          </Typography>

          {/* Campo de pesquisa */}
          <TextField
            label="Pesquisar"
            size="small"
            variant="standard"
            sx={{
              width: 250,
              "& .MuiInputLabel-root": {
                fontSize: "1rem",
                color: "#9E9E9E",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: "#9E9E9E" }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Select com label */}
          <FormControl variant="standard" size="small" sx={{ minWidth: 250 }}>
            <InputLabel sx={{ fontSize: "1rem", color: "#9E9E9E" }}>
              Tipo de acesso
            </InputLabel>
            <Select
              defaultValue=""
              label="Tipo de acesso"
              sx={{
                borderBottom: "1px solid #E0E0E0",
                fontSize: "0.875rem",
              }}
            >
              <MenuItem value="">Whitelist, Blacklist, Rollout...</MenuItem>
              <MenuItem value="Whitelist">Whitelist</MenuItem>
              <MenuItem value="Blacklist">Blacklist</MenuItem>
              <MenuItem value="Rollout">Rollout</MenuItem>
              <MenuItem value="Não Impactadas">Não Impactadas</MenuItem>
            </Select>
          </FormControl>

          {/* Ícone à direita */}
          <IconButton sx={{ color: "#FF6D00" }}>
            <InsertDriveFileOutlinedIcon />
          </IconButton>
        </Box>

        <DataGrid
          rows={unidadesMockadas}
          columns={columns}
          getRowId={(row) => row.id}
          hideFooterSelectedRowCount
          disableRowSelectionOnClick
          disableColumnMenu
          disableColumnSelector
          sx={{
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: 600,
              color: "#616161",
            },
            "& .MuiDataGrid-cell": {
              color: "#616161",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
            },
            "& .MuiDataGrid-columnSeparator": {
              display: "none",
            },
          }}
          pageSizeOptions={[10]}
          pagination
        />
      </Paper>
    </Box>
  );
};

export default TabelaUnidadesCadastradas;
