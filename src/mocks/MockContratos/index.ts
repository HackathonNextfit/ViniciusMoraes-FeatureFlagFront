export interface Contrato {
    Id: number;
    Descricao: string;
    Inativo: boolean;
    PermiteReceberParcelado: boolean;
    QuantMaximoParcelas: number;
    TempoDuracao: number; 
    Tipo: number; 
    TipoDuracao: number; 
    TipoRecebimento: number; 
    ValorTotal: number;
  }
  
  export const mockContratos: Contrato[] = [
    {
      Id: 329955,
      Descricao: "Crossfit Semestral - 3 sessões por semana",
      Inativo: false,
      PermiteReceberParcelado: true,
      QuantMaximoParcelas: 3,
      TempoDuracao: 6,
      Tipo: 1,
      TipoDuracao: 3,
      TipoRecebimento: 3,
      ValorTotal: 870,
    },
    {
      Id: 329956,
      Descricao: "Musculação Anual - Acesso livre",
      Inativo: false,
      PermiteReceberParcelado: true,
      QuantMaximoParcelas: 6,
      TempoDuracao: 12,
      Tipo: 2,
      TipoDuracao: 3,
      TipoRecebimento: 2,
      ValorTotal: 1200,
    },
  ];
  