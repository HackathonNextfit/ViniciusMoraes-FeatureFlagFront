import { Stack } from "@mui/material";
import HeaderInicio from "./components/CustomHeaderInicio";
import { useState, useEffect } from "react";
import { Cliente, mockClientes } from "../../mocks/MockClientes";
import { filtrarClientes } from "./services/FiltrarClientes";

const Inicio = () => {
  const [termoBusca, setTermoBusca] = useState("");
  const [clientesFiltrados, setClientesFiltrados] = useState<Cliente[]>([]); 

  useEffect(() => {
    if (termoBusca.trim()) {
      const resultado = filtrarClientes(mockClientes, termoBusca);
      setClientesFiltrados(resultado);
    } else {
      setClientesFiltrados([]); 
    }
  }, [termoBusca]);

  return (
    <Stack gap={1}  sx={{ width: "100%", padding: 0 }}> 
     <HeaderInicio
        onSearchChange={setTermoBusca}
        searchResults={clientesFiltrados}
        onSelectItem={setTermoBusca}
        renderItem={(cliente) => cliente.nome_completo}
      />
    </Stack>
  );
};

export default Inicio;
