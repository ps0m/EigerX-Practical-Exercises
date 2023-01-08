import { Button, Paper, Typography } from '@mui/material';
import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useCallback, useState } from 'react';
import CustomInput from '../CustomInput/CustomInput';

const styleForPaper = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 5,
  padding: 5,
};

interface PropsInterface {
  setUser: Dispatch<SetStateAction<null | string>>;
}

const Form: FC<PropsInterface> = ({ setUser }) => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handlerChangeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const handlerChangePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const handlerSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setUser(name);
    },
    [name, setUser]
  );

  return (
    <Paper component="form" sx={styleForPaper} elevation={5} onSubmit={handlerSubmit}>
      <Typography variant="h3" component="p" color="s">
        LOGIN
      </Typography>
      <CustomInput value={name} changeValue={handlerChangeName} placeholder="Name" />
      <CustomInput
        type="password"
        value={password}
        changeValue={handlerChangePassword}
        placeholder="Password"
        autoComplete="on"
      />
      <Button
        type="submit"
        disabled={!name || !password}
        variant="contained"
        color="success"
        size="large"
      >
        LogIn
      </Button>
    </Paper>
  );
};
export default Form;
