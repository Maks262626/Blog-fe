import { Route, Routes } from 'react-router-dom';

import { Box } from '@mui/material';

import Feed from './pages/Feed';
import FullArticle from './pages/FullArticle';
import Home from './pages/Home';

import { routes } from './routes';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import BaseLayout from './pages/layouts/BaseLayout';
import AuthLayout from './pages/layouts/AuthLayout';

function App() {

  return (
    <Box sx={{ height: '100%', position: 'relative', backgroundColor: 'secondary.main' }}>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path={routes.PUBLIC.HOME} element={<Home />} />
          <Route path={routes.PUBLIC.FEED} element={<Feed />} />
          <Route path={`${routes.PUBLIC.ARTICLES}/:id`} element={<FullArticle />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={routes.PUBLIC.REGISTER} element={<SignUp />} />
          <Route path={routes.PUBLIC.LOGIN} element={<SignIn />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
