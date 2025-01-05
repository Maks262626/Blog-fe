import { Box, Drawer } from '@mui/material';

import { bottomNav } from './BottomNav';
import { leftNav } from './LeftNav';
import { styles } from './styles.mui';

// uncomment for implementing burger menu
const SideBar = () => {
  // const [mobileOpen, setMobileOpen] = useState(false);
  // const [isClosing, setIsClosing] = useState(false);

  // const handleDrawerClose = () => {
  //   setIsClosing(true);
  //   setMobileOpen(false);
  // };

  // const handleDrawerTransitionEnd = () => {
  //   setIsClosing(false);
  // };

  // const handleDrawerToggle = () => {
  //   if (!isClosing) {
  //     setMobileOpen(!mobileOpen);
  //   }
  // };

  return (
    <>
      {/* <AppBar
        position="fixed"
        sx={{
          width: '100%',
          bgcolor: 'secondary.main',
          display: {xs: 'block', md: 'none'}
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sidebarWidth },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color:'background.default', display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar> */}
      <Box component="nav" sx={styles.wrapper}>
        <Drawer variant="permanent" sx={styles.permanentDrawer} open>
          {leftNav}
        </Drawer>
        {/* <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={styles.tempDrawer}
        >
          {drawer}
        </Drawer> */}
      </Box>
      {bottomNav}
    </>
  );
};

export default SideBar;
