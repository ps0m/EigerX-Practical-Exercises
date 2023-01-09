import FaceIcon from '@mui/icons-material/Face';
import { Avatar, Button, Stack, Typography } from '@mui/material';
import { MouseEvent, useContext } from 'react';
import { UserContext } from '../../context';

const Cabinet = () => {
  const { user, setUser } = useContext(UserContext);

  const handlerLogout = (event: MouseEvent<HTMLButtonElement>) => {
    setUser(null);
  };

  return (
    <Stack maxWidth={320} alignItems="center" py={5} spacing={5}>
      <Typography variant="h2" component="p">
        Hello!
      </Typography>
      <Avatar
        sx={{ width: 300, height: 300, backgroundColor: '#fff', boxShadow: '0 0 10px #000' }}
        alt="logo"
      >
        <FaceIcon sx={{ width: 250, height: 250 }} color="secondary" />
      </Avatar>
      <Typography variant="h2" component="p">
        {user}
      </Typography>
      <Button variant="contained" color="error" size="large" onClick={handlerLogout}>
        <Typography variant="h3" component="p">
          LogOUT
        </Typography>
      </Button>
    </Stack>
  );
};
export default Cabinet;
