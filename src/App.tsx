import { useState } from 'react';
import './App.css';
import { UserContext } from './context';
import Router from './router/Router';

const App = () => {
  const [user, setUser] = useState<null | string>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router />;
    </UserContext.Provider>
  );
};

export default App;
