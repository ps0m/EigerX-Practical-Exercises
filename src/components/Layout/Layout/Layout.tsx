import { CircularProgress, Container } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../UI/Footer/Footer';
import Header from '../../UI/Header/Header';

const Layout = () => (
  <>
    <Suspense fallback={<CircularProgress color="success" />}>
      <Header />
      <Container
        component="main"
        sx={{
          flex: '1 0 auto',
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </Suspense>
  </>
);

export default Layout;
