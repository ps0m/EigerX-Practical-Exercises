import { FC, ReactNode, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../context';
import { MAIN_PAGE, TODO_PAGE } from '../../router/constants';

interface IRequireAuth {
  children: ReactNode;
}

const RequireAuth: FC<IRequireAuth> = ({ children }) => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if (!user && location.pathname === TODO_PAGE) {
    return <Navigate to={MAIN_PAGE} />;
  }

  return <>{children}</>;
};
export default RequireAuth;
