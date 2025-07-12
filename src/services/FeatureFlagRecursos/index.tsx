import axios from "axios";
import { X_FEATURE_FLAG_KEY } from "../../Keys";
import { enqueueSnackbar } from 'notistack';

const API_URL = "https://featureflag-sandbox.appnext.fit/api/Recursos";
const FEATURE_FLAG_KEY = X_FEATURE_FLAG_KEY;

interface RecursoPromise {
  conteudo: RecursoPayload[];
}

export type RecursoPayload = {
  identificador: string;
  descricao: string;
  porcentagem: number;
};

const showError = (message: string) => {
  enqueueSnackbar(message, {
    variant: 'error',
    style: {
      backgroundColor: '#322F35',
      color: '#FFFFFF',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '14px', 
      lineHeight: '24px', 
      letterSpacing: '0.5px'
    },
    hideIconVariant: true
  });
};

const showSuccess = (message: string) => {
  enqueueSnackbar(message, {
    variant: 'success',
    autoHideDuration: 3000,
    style: {
      backgroundColor: '#322F35',
      color: '#FFFFFF',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '14px', 
      lineHeight: '24px', 
      letterSpacing: '0.5px'
    },
    hideIconVariant: true 
  });
};

export const criarRecurso = async (payload: RecursoPayload) => {
  try {
    const response = await axios.post(API_URL, payload);
    showSuccess('Feature salva com sucesso!');
    return response.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Erro ao criar recurso';
    showError(errorMessage);
    throw error;
  }
};

export const getRecursos = async (): Promise<RecursoPromise> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Erro ao buscar recursos';
    showError(errorMessage);
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
    showSuccess('Feature removida com sucesso!');
    return response.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Erro ao deletar recurso';
    showError(errorMessage);
    throw error;
  }
};