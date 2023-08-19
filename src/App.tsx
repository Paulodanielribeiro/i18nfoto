import React from 'react';
import { useRoutes } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import { routes } from './routes';
import Header from './components/Header';
import i18n from './i18n/i18n';
import { useTranslation } from 'react-i18next';

const {t} = useTranslation();

const App = () => {
  const elements = useRoutes(routes);

  return (
    <UserContextProvider>
      <Header />
      {elements}
    </UserContextProvider>
  );
};

export default App;