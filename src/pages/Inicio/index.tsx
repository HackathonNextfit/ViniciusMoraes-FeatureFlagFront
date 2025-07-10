import { Stack, Box } from "@mui/material";
import HeaderInicio from "./components/CustomHeaderInicio";
import SidebarUnderHeader from "../Inicio/components/SidebarUnderHeader";
import { useState, useEffect } from "react";
import { Cliente, mockClientes } from "../../mocks/MockClientes";
import { filtrarClientes } from "../../services/HeaderPrincipal";
import Features from "../Features";

const Inicio = () => {
  const [termoBusca, setTermoBusca] = useState("");
  const [clientesFiltrados, setClientesFiltrados] = useState<Cliente[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (termoBusca.trim()) {
      const resultado = filtrarClientes(mockClientes, termoBusca);
      setClientesFiltrados(resultado);
    } else {
      setClientesFiltrados([]);
    }
  }, [termoBusca]);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#EEEEEE" }}>
      {/* Cabeçalho */}
      <HeaderInicio
        onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        onSearchChange={setTermoBusca}
        searchResults={clientesFiltrados}
        onSelectItem={(cliente: Cliente) => setTermoBusca(cliente.nome_completo)}
        renderItem={(cliente: Cliente) => cliente.nome_completo}
      />

      {/* Sidebar */}
      <SidebarUnderHeader
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Conteúdo principal, empurrado quando sidebar está aberto */}
      <Box
        sx={{
          marginTop: "64px", // altura do AppBar
          marginLeft: sidebarOpen ? "240px" : "0px",
          padding: 2,
          transition: "margin-left 0.3s",
        }}
      >
        <Features />
      </Box>
    </Box>
  );
};

export default Inicio;
