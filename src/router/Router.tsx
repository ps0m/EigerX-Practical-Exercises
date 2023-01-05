import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from '../components/RequireAuth/RequireAuth';
import NotFoundPage from '../pages/NotFoundPage';

import { ANYTHING_PATH, MAIN_PAGE, ROOT_PATH, TODO_PAGE } from './constants';
const Layout = lazy(() => import('../components/Layout/Layout/Layout'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ToDoPage = lazy(() => import('../pages/ToDoPage'));

const Router = () => (
  <Routes>
    <Route path={ROOT_PATH} element={<Layout />}>
      <Route path={MAIN_PAGE} element={<MainPage />} />
      <Route
        path={TODO_PAGE}
        element={
          <RequireAuth>
            <ToDoPage />
          </RequireAuth>
        }
      />
      <Route path={ANYTHING_PATH} element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default Router;
