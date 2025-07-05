export interface HorarioItem {
    Id: number;
    Horario: string; 
  }
  
  export interface DiaItem {
    DiaDaSemana: number; 
    Horarios: HorarioItem[];
  }
  
  export interface GradeHorario {
    Id: number;
    Descricao: string;
    Tipo: number;
    CodigoInstrutor: number;
    NomeInstrutor: string;
    DescricaoModalidadeServico: string;
    Itens: DiaItem[];
  }
  
  export const mockGradeHorarios: { Content: GradeHorario[] } = {
    Content: [
      {
        Id: 55330,
        Descricao: "Grade de crossfit",
        Tipo: 1,
        CodigoInstrutor: 15066717,
        NomeInstrutor: "Vinicius de Moraes",
        DescricaoModalidadeServico: "CrossFit",
        Itens: [
          {
            DiaDaSemana: 1, // Segunda-feira
            Horarios: [
              { Id: 786365, Horario: "2020-01-01T11:00:00Z" },
              { Id: 786370, Horario: "2020-01-01T12:30:00Z" },
              { Id: 786375, Horario: "2020-01-01T14:00:00Z" },
              { Id: 786380, Horario: "2020-01-01T15:30:00Z" },
            ],
          },
          {
            DiaDaSemana: 2, // Terça-feira
            Horarios: [
              { Id: 786385, Horario: "2020-01-01T17:00:00Z" },
              { Id: 786390, Horario: "2020-01-01T18:30:00Z" },
            ],
          },
          {
            DiaDaSemana: 3, // Quarta-feira
            Horarios: [
              { Id: 786395, Horario: "2020-01-01T20:00:00Z" },
              { Id: 786400, Horario: "2020-01-01T21:30:00Z" },
            ],
          },
          {
            DiaDaSemana: 4, // Quinta-feira
            Horarios: [
              { Id: 786405, Horario: "2020-01-01T23:00:00Z" },
            ],
          },
          {
            DiaDaSemana: 5, // Sexta-feira
            Horarios: [
              { Id: 786410, Horario: "2020-01-02T00:30:00Z" },
              { Id: 786415, Horario: "2020-01-02T02:00:00Z" },
            ],
          },
        ],
      },
    ],
  };
  