import React from 'react';

import { Button } from '@mui/material';

const Home: React.FC = () => {
  return (
    <div>
      <Button 
        variant={'outlined'}
        onClick={() => window.location.href = "/novo-chamado" }
      >
        Abrir um Chamado
      </Button>
      <Button
        variant={'contained'}
        onClick={() => window.location.href = "/chat" }
      >
        Chat Online
      </Button>
    </div>
  );
}

export default Home;