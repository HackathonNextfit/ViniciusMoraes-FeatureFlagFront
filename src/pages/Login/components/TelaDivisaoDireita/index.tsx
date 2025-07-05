import React from 'react';
import { Box } from '@mui/material';
import TelaLoginDireitaImagem from '../../../../assets/TelaLoginDireitaImagem.png'; 

const TelaDivisaoDireita: React.FC = () => {
  return (
    <Box
    sx={{
      width: '100%',
      height: '100%',
      backgroundImage: `url(${TelaLoginDireitaImagem})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      flex: 1, 
    }}
  />
  
  );
};

export default TelaDivisaoDireita;
