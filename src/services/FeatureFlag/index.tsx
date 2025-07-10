import axios from "axios";
import { X_FEATURE_FLAG_KEY } from "../../Keys";

const API_URL = "https://featureflag-sandbox.appnext.fit/api/Recursos";
const FEATURE_FLAG_KEY = X_FEATURE_FLAG_KEY;

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

export const deleteRecurso = async (identificador: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${identificador}`, {
      headers: {
        "X-Feature-Flag-Key": FEATURE_FLAG_KEY,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao deletar recurso:", error);
    throw error;
  }
};
