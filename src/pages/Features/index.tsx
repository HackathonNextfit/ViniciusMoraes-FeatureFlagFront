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


const Features = () => {
  const [openModal, setOpenModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const tabelaRef = useRef<any>(null);

  const handleSave = () => {
    tabelaRef.current?.fetchData();
  };

  return (
    <Box sx={{ padding: 2, mt: 10, paddingLeft: 30, paddingRight : 30, height: '80%'}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", height: '100%'}}>
          <CustomTextDefault text="Features" size="h3" sx={{ mr: 4, fontWeight: 600, color: "#616161"}} />
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
              setOpenModal(true);
            }}
          />
          <CustomButtonDefault
            startIcon={<FindInPageIcon />}
            borderColor="#EF6C00"
            textColor="#EF6C00"
            text="Consulta"
            color="#EEEEEE"
            onClick={() => {
              
            }}
          />
        </Box>
      </Box>

      <ModalCriarRecurso
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        onSave={handleSave}
      />
      <TabelaRecursos ref={tabelaRef} searchValue={searchValue} />
    </Box>
  );
};
export default Features;
