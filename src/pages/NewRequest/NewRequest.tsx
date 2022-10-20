import React from 'react';

import { Container, Input, Button } from '@mui/material';

const NewRequest: React.FC = () => {
  return (
    <Container>
      <h2>Abrir Chamado</h2>
      <form>
        <Input placeholder='Número do pedido' />
        <Input placeholder='Título do chamado' />
        <Button>Anexar Fotos</Button>
      </form>
    </Container>
  );
}

export default NewRequest;