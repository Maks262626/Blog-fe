import { Route, Routes } from 'react-router-dom';

import { Box } from '@mui/material';

import SideBar from './components/Drawer/Drawer';
import { sidebarWidth } from './constants';
import Feed from './pages/Feed';
import FullArticle from './pages/FullArticle';
import Home from './pages/Home';
import { routes } from './routes';

function App() {
  return (
    <Box sx={{ height: '100%', position: 'relative', backgroundColor: 'secondary.main' }}>
      <SideBar />
      <Box sx={{ height: '100dvh', pl: { xs: 0, md: `${sidebarWidth}px` }, pt: 8 }}>
        <Routes>
          <Route path={routes.PUBLIC.HOME} element={<Home />} />
          <Route path={routes.PUBLIC.FEED} element={<Feed />} />
          <Route path={`${routes.PUBLIC.ARTICLES}/:id`} element={<FullArticle />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
