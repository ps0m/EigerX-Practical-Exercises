import { ToDoType } from '../types/types';

export type userWithData = {
  user: string | null;
  data: ToDoType[];
};

export type writeToLocalStoreType = {
  ({ user, data }: userWithData): void;
};
