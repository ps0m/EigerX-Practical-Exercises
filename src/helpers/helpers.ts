import { ToDoType } from '../types/types';
import { writeToLocalStoreType } from './types';

export const readFromLocalStor = (name: string) => {
  const local = localStorage.getItem(name);
  const init: ToDoType[] = local !== null ? JSON.parse(local) : [];
  return init;
};

export const writeToLocalStore: writeToLocalStoreType = ({ user, data }) => {
  if (user === null) {
    return;
  }
  const dataString = JSON.stringify(data);
  localStorage.setItem(user, dataString);
};
