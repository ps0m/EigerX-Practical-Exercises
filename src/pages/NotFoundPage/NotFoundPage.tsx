import GppBadIcon from '@mui/icons-material/GppBad';
import { Avatar, Button, Stack, Typography } from '@mui/material';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { MAIN_PAGE } from '../../router/constants';
import { content } from './constants';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goMain = (event: MouseEvent<HTMLButtonElement>) => navigate(MAIN_PAGE, { replace: true });
  return (
    <Stack
      component="section"
      justifyContent="center"
      alignItems="center"
      height="100%"
      spacing={4}
    >
      <Typography variant="h2" component="p">
        {content.title}
      </Typography>
      <Avatar
        sx={{ width: 300, height: 300, backgroundColor: '#fff', boxShadow: '0 0 10px #000' }}
        alt="logo"
      >
        <GppBadIcon sx={{ width: 250, height: 250 }} color="secondary" />
      </Avatar>
      <Typography variant="h4" component="p">
        {content.subtitle}
      </Typography>
      <Button variant="contained" color="success" size="large" onClick={goMain}>
        <Typography variant="h3" component="p">
          {content.button}
        </Typography>
      </Button>
    </Stack>
  );
};
export default NotFoundPage;
