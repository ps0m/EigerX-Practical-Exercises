import { Dispatch, SetStateAction } from 'react';

export type ToDoType = {
  id: number;
  title: string;
  open: boolean;
};

export interface UserContextType {
  user: null | string;
  setUser: Dispatch<SetStateAction<null | string>>;
}
