import { Cliente } from "../../mocks/MockClientes";

export const filtrarClientes = (clientes: Cliente[], termo: string): Cliente[] => {
  const termoLower = termo.toLowerCase();

  return clientes.filter((cliente) => {
    return (
      cliente.nome_completo.toLowerCase().includes(termoLower) ||
      cliente.cpf.includes(termo)
    );
  });
};