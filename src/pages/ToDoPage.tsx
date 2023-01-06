import { Stack } from '@mui/material';
import { useCallback, useState } from 'react';
import CustomInput from '../components/CustomInput/CustomInput';
import ToDoItem from '../components/CustomInput/ToDoItem/ToDoItem';
import { ToDoType } from '../types/types';

const ToDoPage = () => {
  const [listToDo, setListToDo] = useState<ToDoType[]>([]);

  const changeToDo = useCallback((newToDo: ToDoType) => {
    setListToDo((prev) =>
      [...prev].map((toDo) => {
        return toDo.id === newToDo.id ? newToDo : toDo;
      })
    );
  }, []);

  const createToDo = useCallback((title: string) => {
    const toDo = { title, id: Date.now(), open: true };
    setListToDo((prev) => prev.concat(toDo));
  }, []);

  const deleteToDo = useCallback((id: number) => {
    setListToDo((prev) => prev.filter((toDo) => toDo.id !== id));
  }, []);

  return (
    <Stack component="section" justifyContent="flex-start" alignItems="center">
      <CustomInput createToDo={createToDo} />
      <Stack
        direction="row"
        justifyContent={{ xs: 'space-evenly' }}
        alignItems="stretch"
        flexWrap="wrap"
        width="100%"
        gap={2}
      >
        {listToDo.map((toDo) => (
          <ToDoItem
            key={toDo.id}
            id={toDo.id}
            title={toDo.title}
            open={toDo.open}
            changeToDo={changeToDo}
            deleteToDo={deleteToDo}
          />
        ))}
      </Stack>
    </Stack>
  );
};
export default ToDoPage;
