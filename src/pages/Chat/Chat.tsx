import React, { useContext } from 'react';
import SocketContext from '../../contexts/SocketContext';

import { Box } from '@mui/material';

const Chat: React.FC = () => {
  const { socket, uid, users, messages } = useContext(SocketContext).SocketState;

  return (
    <>
      <h2>Chat Online</h2>
      {messages.map((message, index) => (
        <Box>
          <p>{message.message}</p>
          <p>{users[index].name}</p>
        </Box>
      ))}
    </>
  );
}

export default Chat;