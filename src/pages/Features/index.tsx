import { Box } from "@mui/material";
import CustomButtonDefault from "../../components/CustomButtonDefault";
import CustomTextDefault from "../../components/CustomTextDefault";
import ModalCriarRecurso from "./components/ModalCriar";
import { useRef, useState } from "react";
import TabelaRecursos from "./components/TabelaRecursos";
import CustomInputWithIcon from "./components/InputComIcon";
import SearchIcon from "@mui/icons-material/Search";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import AddIcon from "@mui/icons-material/Add";
import FeaturesDetails from "./components/FeaturesDetails";
import ModalConsulta from "./components/ModalConsulta";


const Features = () => {
  const [openCriarModal, setOpenCriarModal] = useState(false); // Renomeado para clareza
  const [openConsultaModal, setOpenConsultaModal] = useState(false); // Novo estado para o ModalConsulta
  const [searchValue, setSearchValue] = useState("");
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const tabelaRef = useRef<any>(null);

  const handleSave = () => {
    tabelaRef.current?.fetchData();
  };


  return (
    <Box sx={{ padding: 2, mt: 1, paddingLeft: 10, paddingRight: 10, height: "80%" }}>

      {/* Cabeçalho e botões visíveis apenas quando não estiver em modo de ver os detalhes */}
      {!mostrarDetalhes && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
            <CustomTextDefault text="Features" size="h3" sx={{ mr: 4, fontWeight: 600, color: "#616161" }} />
            <CustomInputWithIcon
              placeholder="Pesquisar"
              icon={<SearchIcon />}
              onChange={(value) => setSearchValue(value)}
              value={searchValue}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <CustomButtonDefault
              startIcon={<AddIcon />}
              text="Feature"
              color="#EF6C00"
              onClick={() => {
                setOpenCriarModal(true); // Usa o novo estado para o modal de criação
              }}
            />
            <CustomButtonDefault
              startIcon={<FindInPageIcon />}
              borderColor="#EF6C00"
              textColor="#EF6C00"
              text="Consulta"
              color="#EEEEEE"
              onClick={() => {
                setOpenConsultaModal(true); // Abre o ModalConsulta
              }}
            />
          </Box>
        </Box>
      )}

      {/* Modal de Criação de Recurso */}
      <ModalCriarRecurso
        open={openCriarModal} // Usa o novo estado
        onClose={() => setOpenCriarModal(false)} // Fecha o modal de criação
        onSave={handleSave}
      />

      {/* Modal de Consulta */}
      <ModalConsulta
        open={openConsultaModal} // Controla a abertura do ModalConsulta
        onClose={() => setOpenConsultaModal(false)} // Função para fechar o ModalConsulta
      />

      {/* Conteúdo principal (tabela ou detalhes) */}
      {mostrarDetalhes ? (
        <FeaturesDetails onVoltar={() => setMostrarDetalhes(false)} />
      ) : (
        <TabelaRecursos ref={tabelaRef} searchValue={searchValue} onVerDetalhes={() => setMostrarDetalhes(true)} />
      )}
    </Box>
  );
};
export default Features;