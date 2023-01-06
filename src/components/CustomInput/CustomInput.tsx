import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { ChangeEvent, FC, KeyboardEvent, MouseEvent, useState } from 'react';

interface PropsInterface {
  createToDo: (title: string) => void;
}

const CustomInput: FC<PropsInterface> = ({ createToDo }) => {
  const [title, setTitle] = useState<string>('');

  const handlerChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handlerKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      createToDo(title);
      setTitle('');
    }
  };

  const handlerClickCreate = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    createToDo(title);
    setTitle('');
  };

  return (
    <Stack direction="row" justifyContent="center" m={3} minWidth={300} width="50%">
      <TextField
        label={<Typography variant="h5">Enter ToDo</Typography>}
        variant="outlined"
        size="medium"
        value={title}
        onChange={handlerChangeInput}
        onKeyPress={handlerKeyPress}
        sx={{ flexGrow: 1 }}
        inputProps={{
          style: { fontSize: 16 },
        }}
      />
      <Button variant="contained" color="secondary" disabled={!title} onClick={handlerClickCreate}>
        <AddCircleIcon fontSize="large" />
      </Button>
    </Stack>
  );
};
export default CustomInput;
