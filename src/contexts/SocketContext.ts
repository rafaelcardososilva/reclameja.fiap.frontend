import { createContext } from 'react';
import { Socket } from 'socket.io-client';
import { Message } from '../model/message';
import { User } from '../model/user';

export interface ISocketContextState {
  socket: Socket | undefined;
  uid: string;
  users: User[];
  messages: Message[];
}

export const defaultSocketContextState: ISocketContextState = {
  socket: undefined,
  uid: '',
  users: [],
  messages: [],
};

export type TSocketContextActions = 'update_socket' | 'update_uid' | 'update_users' | 'remove_user' | 'update_messages';
export type TSocketContextPayload = string | User[] | Socket | Message[];

export interface ISocketContextActions {
  type: TSocketContextActions;
  payload: TSocketContextPayload;
}

export const SocketReducer = (state: ISocketContextState, action: ISocketContextActions) => {
  console.log('Message recieved - Action: ' + action.type + ' - Payload: ', action.payload);

  switch (action.type) {
    case 'update_socket':
      return { ...state, socket: action.payload as Socket };
    case 'update_uid':
      return { ...state, uid: action.payload as string };
    case 'update_messages':
      return { ...state, messages: action.payload as Message[] };
    case 'update_users':
      return { ...state, users: action.payload as User[] };
    case 'remove_user':
      return { ...state, users: state.users.filter((user) => user.name !== (action.payload as any).name) };
    default:
      return state;
  }
};

export interface ISocketContextProps {
  SocketState: ISocketContextState;
  SocketDispatch: React.Dispatch<ISocketContextActions>;
}

const SocketContext = createContext<ISocketContextProps>({
  SocketState: defaultSocketContextState,
  SocketDispatch: () => {}
});

export const SocketContextConsumer = SocketContext.Consumer;
export const SocketContextProvider = SocketContext.Provider;

export default SocketContext;