export interface Agenda {
    Id: number;
    DataInicial: string; // ISO 8601
    DataFinal: string;
    DataBase: string;
    Tipo: number;
    AulaLivre: boolean;
    CodigoGradeHorarioItem: number;
    CodigoInstrutor: number;
    CodigoItem: number | null;
    CodigoLocalAgenda: number | null;
    CodigoModalidade: number;
    Cor: string;
    Descricao: string;
    DescricaoLocalAgenda: string | null;
    DescricaoModalidade: string;
    DescricaoServicoClienteSemContrato: string;
    NomeInstrutor: string;
    LimiteAlunos: number;
    QtdeAlunos: number;
    Status: number;
    Participantes: any[];
    PermiteAddClienteSemContrato: boolean;
    PermiteAddClienteSemServico: boolean;
    PermiteAddOportunidade: boolean;
    TemLimiteAlunos: boolean;
    TemLimiteClienteSemContrato: boolean;
    TemLimiteClienteSemServico: boolean;
    LimiteClienteSemContrato: number;
    LimiteClienteSemServico: number;
    LinkAcessoOnline: string | null;
    UtilizaServicoClienteSemContrato: boolean;
  }
  
  export const mockAgendas: Agenda[] = [
    {
      Id: 73764518,
      DataInicial: "2025-06-30T11:00:00Z",
      DataFinal: "2025-06-30T12:00:00Z",
      DataBase: "2025-06-30T03:00:00Z",
      Tipo: 1,
      AulaLivre: false,
      CodigoGradeHorarioItem: 786365,
      CodigoInstrutor: 15066717,
      CodigoItem: null,
      CodigoLocalAgenda: null,
      CodigoModalidade: 65537,
      Cor: "hsl(224, 90%, 36%)",
      Descricao: "Grade de crossfit",
      DescricaoLocalAgenda: null,
      DescricaoModalidade: "CrossFit",
      DescricaoServicoClienteSemContrato: "Aula experimental 35,00",
      NomeInstrutor: "Vinicius de Moraes",
      LimiteAlunos: 15,
      QtdeAlunos: 0,
      Status: 1,
      Participantes: [],
      PermiteAddClienteSemContrato: true,
      PermiteAddClienteSemServico: false,
      PermiteAddOportunidade: false,
      TemLimiteAlunos: true,
      TemLimiteClienteSemContrato: false,
      TemLimiteClienteSemServico: false,
      LimiteClienteSemContrato: 0,
      LimiteClienteSemServico: 0,
      LinkAcessoOnline: null,
      UtilizaServicoClienteSemContrato: true,
    },
    {
      Id: 73764519,
      DataInicial: "2025-07-01T18:30:00Z",
      DataFinal: "2025-07-01T19:30:00Z",
      DataBase: "2025-07-01T03:00:00Z",
      Tipo: 2,
      AulaLivre: false,
      CodigoGradeHorarioItem: 786366,
      CodigoInstrutor: 15066718,
      CodigoItem: null,
      CodigoLocalAgenda: null,
      CodigoModalidade: 65538,
      Cor: "hsl(0, 80%, 50%)",
      Descricao: "Aula de HIIT - Avançado",
      DescricaoLocalAgenda: null,
      DescricaoModalidade: "HIIT",
      DescricaoServicoClienteSemContrato: "Aula avulsa R$ 40,00",
      NomeInstrutor: "Larissa Souza",
      LimiteAlunos: 12,
      QtdeAlunos: 4,
      Status: 1,
      Participantes: [],
      PermiteAddClienteSemContrato: true,
      PermiteAddClienteSemServico: true,
      PermiteAddOportunidade: true,
      TemLimiteAlunos: true,
      TemLimiteClienteSemContrato: true,
      TemLimiteClienteSemServico: false,
      LimiteClienteSemContrato: 2,
      LimiteClienteSemServico: 0,
      LinkAcessoOnline: null,
      UtilizaServicoClienteSemContrato: true,
    },
  ];
  