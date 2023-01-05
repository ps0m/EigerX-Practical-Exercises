import { FC, ReactNode } from 'react';

interface IRequireAuth {
  children: ReactNode;
}

const RequireAuth: FC<IRequireAuth> = ({ children }) => {
  return <>{children}</>;
};
export default RequireAuth;
