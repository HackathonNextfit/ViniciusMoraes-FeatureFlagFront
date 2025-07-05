// src/services/recursosService.ts
import axios from "axios";

const API_URL = "https://featureflag-sandbox.appnext.fit/api/Recursos";

interface  RecursoPromise {
  conteudo: RecursoPayload[];
}

export type RecursoPayload = {
  identificador: string;
  descricao: string;
  porcentagem: number;
};

export const criarRecurso = async (payload: RecursoPayload) => {
  try {
    const response = await axios.post(API_URL, payload);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao criar recurso:", error);
    throw error;

  }
};

export const getRecursos = async (): Promise<RecursoPromise> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao buscar recursos:", error);
    throw error;
  }
};

export const deleteRecurso = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao deletar recurso:", error);
    throw error;
  }
};
