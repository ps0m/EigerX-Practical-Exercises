import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from '../components/RequireAuth/RequireAuth';

import { ANYTHING_PATH, MAIN_PAGE, TODO_PAGE } from './constants';
const Layout = lazy(() => import('../components/Layout/Layout/Layout'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const ToDoPage = lazy(() => import('../pages/ToDoPage/ToDoPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const Router = () => (
  <Routes>
    <Route path={MAIN_PAGE} element={<Layout />}>
      <Route index element={<MainPage />} />
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
