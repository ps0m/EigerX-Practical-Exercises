import {
  CheckCircleOutline,
  Delete as DeleteIcon,
  RadioButtonUnchecked,
} from '@mui/icons-material';
import { Checkbox, FormControlLabel, IconButton, Paper, Stack, TextField } from '@mui/material';
import { ChangeEvent, FC, FocusEvent, KeyboardEvent, memo, MouseEvent } from 'react';
import { ToDoType } from '../../../types/types';

interface PropsInterface {
  id: number;
  title: string;
  open: boolean;
  changeToDo: (newToDo: ToDoType) => void;
  deleteToDo: (id: number) => void;
}

const ToDoItem: FC<PropsInterface> = memo(({ id, title, open, changeToDo, deleteToDo }) => {
  const handlerClickDelete = (_event: MouseEvent<HTMLButtonElement>) => {
    deleteToDo(id);
  };

  const handlerChangeStatus = (_event: ChangeEvent<HTMLInputElement>) => {
    changeToDo({ id, title, open: !open });
  };

  const updateTitle = (currentValue: string) => {
    if (currentValue !== title) {
      changeToDo({ id, open, title: currentValue });
    }
  };

  const handlerKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const input = event.target as HTMLInputElement;
      updateTitle(input.value);
    }
  };

  const handlerBlur = (event: FocusEvent<HTMLInputElement>) => {
    updateTitle(event.target.value);
  };

  return (
    <Stack direction="row" width="40%" minWidth={300}>
      <Paper
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: 2,
        }}
        elevation={5}
      >
        <FormControlLabel
          label={
            <TextField
              variant="standard"
              size="medium"
              multiline
              defaultValue={title}
              onBlur={handlerBlur}
              onKeyPress={handlerKeyPress}
              sx={{
                width: '100%',
                '& div textarea': { lineHeight: 1.5 },
                '& div::before': { border: 'none' },
                '& div:hover: *': { border: 'none' },
                '& div::after': { border: 'none' },
              }}
              inputProps={{
                style: { fontSize: 16 },
              }}
            />
          }
          control={
            <Checkbox
              color="success"
              checked={!open}
              icon={<RadioButtonUnchecked fontSize="large" />}
              checkedIcon={<CheckCircleOutline fontSize="large" />}
              onChange={handlerChangeStatus}
            />
          }
          sx={{ flexGrow: 1, '& .MuiFormControlLabel-label': { width: '100%' } }}
        />
        <IconButton aria-label="delete" onClick={handlerClickDelete} sx={{ alignSelf: 'center' }}>
          <DeleteIcon fontSize="large" color="error" />
        </IconButton>
      </Paper>
    </Stack>
  );
});
export default ToDoItem;
