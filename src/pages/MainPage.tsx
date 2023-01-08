import { Stack } from '@mui/material';
import { useContext } from 'react';
import Cabinet from '../components/Cabinet/Cabinet';
import Form from '../components/Form/Form';
import { UserContext } from '../context';

const MainPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <Stack component="section" justifyContent="center" alignItems="center" height="100%">
      {user ? <Cabinet /> : <Form setUser={setUser} />}
    </Stack>
  );
};
export default MainPage;
