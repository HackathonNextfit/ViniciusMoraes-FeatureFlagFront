export interface UsuarioUnidade {
    Id: number;
    CodigoUsuario: number;
    CodigoUnidade: number;
    CodigoPerfilAcesso: number;
    Inativo: boolean;
    PerfilAcesso: {
      Id: number;
      Nome: string;
    };
    Unidade: {
      Id: number;
      Fantasia: string;
      Endereco: string;
      NumEndereco: string;
      Cidade: {
        Id: number;
        Descricao: string;
      };
    };
  }
  
  export interface UsuarioSistema {
    Id: number;
    Nome: string;
    Email: string;
    DataNascimento: string;
    DddFone: string;
    Fone: string;
    Cpf: string | null;
    Rg: string | null;
    Sexo: string | null;
    TipoCadastro: number;
    TipoConselho: number;
    CodigoUnidadePreferencial: number;
    Cep: string | null;
    Endereco: string | null;
    NumEndereco: string | null;
    Bairro: string | null;
    Cidade: string | null;
    CodigoCidade: number | null;
    CompleEndereco: string | null;
    Observacao: string | null;
    Cref: string | null;
    Crefito: string | null;
    AcessoBloqueado: boolean;
    TipoAcessoBloqueado: number | null;
    Unidades: UsuarioUnidade[];
  }
  
  export const mockUsuarios: { Content: UsuarioSistema[] } = {
    Content: [
      {
        Id: 21884862,
        Nome: "Controle de acesso (Não alterar)",
        Email: "vinicius.moraes@controle3.com.br",
        DataNascimento: "2025-05-28T18:19:07Z",
        DddFone: "99",
        Fone: "999999999",
        Cpf: null,
        Rg: null,
        Sexo: null,
        TipoCadastro: 1,
        TipoConselho: 1,
        CodigoUnidadePreferencial: 6859,
        Cep: null,
        Endereco: null,
        NumEndereco: null,
        Bairro: null,
        Cidade: null,
        CodigoCidade: null,
        CompleEndereco: null,
        Observacao: null,
        Cref: null,
        Crefito: null,
        AcessoBloqueado: false,
        TipoAcessoBloqueado: null,
        Unidades: [
          {
            Id: 300070,
            CodigoUsuario: 21884862,
            CodigoUnidade: 6859,
            CodigoPerfilAcesso: 24776,
            Inativo: false,
            PerfilAcesso: {
              Id: 24776,
              Nome: "Administrador",
            },
            Unidade: {
              Id: 6859,
              Fantasia: "Next Fitness",
              Endereco: "Rua teste",
              NumEndereco: "0",
              Cidade: {
                Id: 1,
                Descricao: "Criciúma",
              },
            },
          },
        ],
      },
    ],
  };
  