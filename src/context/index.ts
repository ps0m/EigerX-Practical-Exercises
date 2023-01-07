import { createContext } from 'react';
import { UserContextType } from '../types/types';

export const InitialUserContext: UserContextType = {
  user: null,
  setUser: () => '',
};

export const UserContext = createContext<UserContextType>(InitialUserContext);
