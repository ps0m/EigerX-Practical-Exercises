import FaceIcon from '@mui/icons-material/Face';
import { Avatar, Stack, Typography } from '@mui/material';
import { FC } from 'react';

interface PropsInterface {
  name: string;
}

const Cabinet: FC<PropsInterface> = ({ name }) => {
  return (
    <Stack maxWidth={320} alignItems="center" spacing={5}>
      <Typography variant="h2" component="p" color="secondary">
        Hello!
      </Typography>
      <Avatar
        sx={{ width: 300, height: 300, backgroundColor: '#fff', boxShadow: '0 0 10px #000' }}
        alt="logo"
      >
        <FaceIcon sx={{ width: 250, height: 250 }} color="secondary" />
      </Avatar>
      <Typography variant="h2" component="p" color="secondary">
        {name}
      </Typography>
    </Stack>
  );
};
export default Cabinet;
