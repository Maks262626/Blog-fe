import { Route, Routes } from 'react-router-dom';

import { Box } from '@mui/material';

import Feed from './pages/Feed';
import FullArticle from './pages/FullArticle/FullArticle';
import Home from './pages/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import AuthLayout from './pages/layouts/AuthLayout';
import BaseLayout from './pages/layouts/BaseLayout';
import { routes } from './routes';

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
