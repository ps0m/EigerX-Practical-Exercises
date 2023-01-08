import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Stack } from '@mui/material';
import { ChangeEvent, KeyboardEvent, MouseEvent, useCallback, useContext, useState } from 'react';
import CustomInput from '../components/CustomInput/CustomInput';
import ToDoItem from '../components/ToDoItem/ToDoItem';
import { UserContext } from '../context';
import { readFromLocalStor, writeToLocalStore } from '../helpers/helpers';
import { ToDoType } from '../types/types';

const ToDoPage = () => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState<string>('');
  const [listToDo, setListToDo] = useState<ToDoType[]>(() => (user ? readFromLocalStor(user) : []));

  const changeToDo = useCallback(
    (newToDo: ToDoType) => {
      setListToDo((prev) => {
        const newList = prev.map((toDo) => {
          return toDo.id === newToDo.id ? newToDo : toDo;
        });
        writeToLocalStore({ user, data: newList });
        return newList;
      });
    },
    [user]
  );

  const createToDo = useCallback(
    (title: string) => {
      const toDo = { title, id: Date.now(), open: true };
      setListToDo((prev) => {
        const newList = prev.concat(toDo);
        writeToLocalStore({ user, data: newList });
        return newList;
      });
    },
    [user]
  );

  const deleteToDo = useCallback(
    (id: number) => {
      setListToDo((prev) => {
        const newList = prev.filter((toDo) => toDo.id !== id);
        writeToLocalStore({ user, data: newList });
        return newList;
      });
    },
    [user]
  );

  const handlerClickCreate = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      createToDo(title);
      setTitle('');
    },
    [createToDo, title]
  );

  const handlerKeyPress = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        createToDo(title);
        setTitle('');
      }
    },
    [createToDo, title]
  );

  const handlerChangeInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }, []);

  return (
    <Stack component="section" justifyContent="flex-start" alignItems="center">
      <Stack direction="row" justifyContent="center" m={3} minWidth={300} width="50%">
        <CustomInput
          value={title}
          changeValue={handlerChangeInput}
          placeholder="Enter ToDo"
          handlerKeyPress={handlerKeyPress}
        />
        <Button
          variant="contained"
          color="secondary"
          disabled={!title}
          onClick={handlerClickCreate}
        >
          <AddCircleIcon fontSize="large" />
        </Button>
      </Stack>
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
