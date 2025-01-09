import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { sidebarWidth } from '@/constants';
import { routes } from '@/routes';
import { Box } from '@mui/material';

import SideBar from '@/components/Drawer/Drawer';

import { selectUserData } from '@/redux/userSlice';

const BaseLayout = () => {
  const { isLoggedIn } = useSelector(selectUserData);

  if (!isLoggedIn) {
    return <Navigate to={routes.PUBLIC.LOGIN} replace />;
  }

  return (
    <Box sx={{ height: '100dvh', pl: { xs: 0, md: `${sidebarWidth}px` }, pt: 8 }}>
      <SideBar />
      <Outlet />
    </Box>
  );
};

export default BaseLayout;
