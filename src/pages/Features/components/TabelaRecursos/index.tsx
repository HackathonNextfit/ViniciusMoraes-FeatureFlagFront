import { DataGrid, GridColDef, GridActionsCellItem, GridRowParams} from "@mui/x-data-grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Paper } from "@mui/material";
import React, { useEffect, useImperativeHandle, useState } from "react";
import { getRecursos, RecursoPayload} from "../../../../services/FeatureFlag";
import ModalCriarRecurso from "../ModalCriar";
import { deleteRecurso } from "../../../../services/FeatureFlag";
import ModalConfirmarExclusao from "../ModalConfirmarExclusao";

export const TabelaRecursosDataGrid = React.forwardRef((props: any, ref) => {
  const [modalConfirmarOpen, setModalConfirmarOpen] = useState(false);
  const [recursos, setRecursos] = useState<RecursoPayload[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [recursoSelecionado, setRecursoSelecionado] =
    useState<RecursoPayload | null>(null);

  const recursosFiltro = recursos.filter((recurso) => {
    return recurso.identificador.toLowerCase().includes(props.searchValue.toLowerCase());
  });

  const fetchData = async () => {
    const data = await getRecursos();
    setRecursos(data.conteudo);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModal = (row: RecursoPayload) => {
    setRecursoSelecionado(row);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setRecursoSelecionado(null);
  };

  const handleConfirmDelete = async (row: RecursoPayload) => {
    try {
      await deleteRecurso(row.identificador);
      fetchData();
    } catch (error) {
      console.error("Erro ao apagar recurso:", error);
    } finally {
      setModalConfirmarOpen(false);
    }
  };

  const columns: GridColDef[] = [
    { field: "identificador", headerName: "Identificador", flex: 1 },
    { field: "descricao", headerName: "Descrição", flex: 1 },
    {
      field: "porcentagem",
      headerName: "Rollout (%)",
      type: "number",
      flex: 0.5,
    },
    {
      field: "acoes",
      headerName: "",
      type: "actions",
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          icon={<MoreVertIcon />}
          label="Editar"
          onClick={() => handleOpenModal(params.row)}
          showInMenu
        />,
        <GridActionsCellItem
        icon={<MoreVertIcon />}
        label="Apagar"
        onClick={() => {
          setRecursoSelecionado(params.row);
          setModalConfirmarOpen(true);
        }}
        showInMenu
      />
      
      ],
    },
  ];

  useImperativeHandle(ref, () => ({
    fetchData,
  }));

  return (
    <Box sx={{ height: "90%", width: "100%", mt: 4 }}>
      <Paper elevation={0} sx={{ height: "100%", p: 2, borderRadius: 2 }}>
      <DataGrid
        rows={recursosFiltro}
        columns={columns}
        getRowId={(row) => row.identificador}
        initialState={{ 
          pagination: { 
            paginationModel: { page: 0, pageSize: 5 } 
          } 
        }}
        pageSizeOptions={[10, 15, 30]}
        sx={{
          border: 'none', 
          color: '#616161', 
          '& .MuiDataGrid-columnHeaderTitle': { 
            fontWeight: 600 
          }
        }}
        localeText={{
          footerRowSelected: count => `${count.toLocaleString()} linha(s) selecionada(s)`,
          footerTotalVisibleRows: (visibleCount, totalCount) =>
            `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,
          paginationRowsPerPage: 'Exibir:',
        }}
      />
      </Paper>
      <ModalCriarRecurso
        open={modalOpen}
        onClose={handleCloseModal}
        onSave={fetchData}
      />
      <ModalConfirmarExclusao
        open={modalConfirmarOpen}
        onClose={() => setModalConfirmarOpen(false)}
        onConfirm={() => {
          if (recursoSelecionado) {
            handleConfirmDelete(recursoSelecionado);
          }
        }}
        nomeRecurso={recursoSelecionado?.descricao}
      />
    </Box>    
  );  
});

export default TabelaRecursosDataGrid;